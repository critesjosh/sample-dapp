import {
  Contract,
  ExtendedNote,
  Fr,
  Note,
  computeSecretHash,
  createPXEClient,
  waitForPXE,
} from "@aztec/aztec.js";
import { createAccount } from "@aztec/accounts/testing";
import { TokenContractArtifact } from "@aztec/noir-contracts.js/Token";

const {
  PXE_URL = "http://localhost:8080",
  ETHEREUM_HOST = "http://localhost:8545",
} = process.env;

describe("token contract", () => {});