import { createPXEClient, Fr, computeSecretHash, ExtendedNote, Note } from '@aztec/aztec.js';
// import { getToken } from './contracts.mjs';
import { TokenContractArtifact, TokenContract } from "@aztec/noir-contracts.js/Token";
import { getInitialTestAccountsWallets } from '@aztec/accounts/testing';

// console.debug(process.env);
const { PXE_URL = 'http://localhost:8080' } = process.env;
// console.debug(PXE_URL);

async function main() {
  const pxe = createPXEClient(PXE_URL);
  const { l1ChainId } = await pxe.getNodeInfo();
  console.log(`Connected to chain ${l1ChainId}`);

  const accounts = await pxe.getRegisteredAccounts();

  const [ownerWallet] = await getInitialTestAccountsWallets(pxe);

  let tokenOwned = await TokenContract.deploy(ownerWallet, ownerWallet.getAddress(), 'TestToken', 'TT', 18).send().deployed();

  console.log(`Owner address: ${ownerWallet.getAddress()}`);
  const ownerAddress = ownerWallet.getAddress(); //.getCompleteAddress();
  // const tokenOwned = await getToken(ownerWallet);

  // const showPublicBalances = async () => {
  //   for (const account of accounts) {
  //     const balance = await tokenOwned.methods.balance_of_public(account.address).simulate();
  //     console.log(`Balance of ${account.address}: ${balance}`);
  //   }
  // };
  // await showPublicBalances();
  // const txHash = await tokenOwned.methods.mint_public(ownerAddress, 100n).send().getTxHash();
  // console.log(`Sent mint transaction `, txHash);
  // await showPublicBalances();

  const mintAmount = 20n;
  const secret = Fr.random();
  const secretHashed = computeSecretHash(secret);
  // console.debug(tokenOwned.artifact.storageLayout['pending_shields'].slot)
  const receipt =
    await tokenOwned.methods.mint_private(mintAmount, secretHashed).send().wait();
  console.debug(await pxe.getOutgoingNotes({}));
  const insertion = new ExtendedNote(
    new Note([new Fr(mintAmount), secretHashed]),
    ownerAddress,
    tokenOwned.address,
    tokenOwned.artifact.storageLayout['pending_shields'].slot,
    tokenOwned.artifact.notes['TransparentNote'].id,
    receipt.txHash
  );
  console.debug(insertion);
  try {
    await ownerWallet.addNote(insertion);
    console.debug("Note added")
  } catch (e) { console.error(e); }
  console.debug(await pxe.getOutgoingNotes({}));
  await tokenOwned.methods
    .redeem_shield(ownerAddress, mintAmount, secret).send().wait();
  console.debug("**not** HERE")

  // console.log(`User accounts:\n${accounts.map(a => "* " + a.address).join('\n')}`);
  console.log(`Balances\n=====`);
  accounts.forEach(async a => {
    let adr = a.address;
    console.log(`${await tokenOwned.methods.balance_of_private(adr).simulate()
      } | ${adr}`);
  });
}

main().catch(err => {
  console.error(`Error in app: ${err}`);
  process.exit(1);
});