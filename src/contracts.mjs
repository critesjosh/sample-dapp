import { AztecAddress, Contract, loadContractArtifact } from "@aztec/aztec.js";
import { readFileSync } from "fs";
import TokenContractJson from "../contracts/token_contract/target/token_contract-Token.json" assert {type:"json"}
// import {TokenContractArtifact, TokenContract} from "../artifacts/Token.ts";

export async function getToken(client) {
    const addresses = JSON.parse(readFileSync('addresses.json'));
    return Contract.at(AztecAddress.fromString(addresses.token), loadContractArtifact(TokenContractJson), client);
    // return TokenContract.at(AztecAddress.fromString(addresses.token), client);
}