
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  AztecAddress,
  type AztecAddressLike,
  CompleteAddress,
  Contract,
  type ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  type ContractInstanceWithAddress,
  type ContractMethod,
  type ContractStorageLayout,
  type ContractNotes,
  DeployMethod,
  EthAddress,
  type EthAddressLike,
  EventSelector,
  type FieldLike,
  Fr,
  type FunctionSelectorLike,
  L1EventPayload,
  loadContractArtifact,
  type NoirCompiledContract,
  NoteSelector,
  Point,
  type PublicKey,
  type Wallet,
  type WrappedFieldLike,
} from '@aztec/aztec.js';
import TokenContractArtifactJson from '../contracts/token_contract/target/token_contract-Token.json' assert { type: 'json' };
export const TokenContractArtifact = loadContractArtifact(TokenContractArtifactJson as NoirCompiledContract);


      export type Transfer = {
        from: Fr
to: Fr
amount: Fr
      }
    

/**
 * Type-safe interface for contract Token;
 */
export class TokenContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, TokenContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, TokenContract.artifact, wallet) as Promise<TokenContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, admin: AztecAddressLike, name: string, symbol: string, decimals: (bigint | number)) {
    return new DeployMethod<TokenContract>(Fr.ZERO, wallet, TokenContractArtifact, TokenContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeysHash(publicKeysHash: Fr, wallet: Wallet, admin: AztecAddressLike, name: string, symbol: string, decimals: (bigint | number)) {
    return new DeployMethod<TokenContract>(publicKeysHash, wallet, TokenContractArtifact, TokenContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof TokenContract['methods']>(
    opts: { publicKeysHash?: Fr; method?: M; wallet: Wallet },
    ...args: Parameters<TokenContract['methods'][M]>
  ) {
    return new DeployMethod<TokenContract>(
      opts.publicKeysHash ?? Fr.ZERO,
      opts.wallet,
      TokenContractArtifact,
      TokenContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return TokenContractArtifact;
  }
  

  public static get storage(): ContractStorageLayout<'admin' | 'minters' | 'balances' | 'total_supply' | 'pending_shields' | 'public_balances' | 'symbol' | 'name' | 'decimals'> {
      return {
        admin: {
      slot: new Fr(1n),
    },
minters: {
      slot: new Fr(2n),
    },
balances: {
      slot: new Fr(3n),
    },
total_supply: {
      slot: new Fr(4n),
    },
pending_shields: {
      slot: new Fr(5n),
    },
public_balances: {
      slot: new Fr(6n),
    },
symbol: {
      slot: new Fr(7n),
    },
name: {
      slot: new Fr(8n),
    },
decimals: {
      slot: new Fr(9n),
    }
      } as ContractStorageLayout<'admin' | 'minters' | 'balances' | 'total_supply' | 'pending_shields' | 'public_balances' | 'symbol' | 'name' | 'decimals'>;
    }
    

  public static get notes(): ContractNotes<'TransparentNote' | 'TokenNote'> {
    return {
      TransparentNote: {
          id: new NoteSelector(1049878767),
        },
TokenNote: {
          id: new NoteSelector(3992089675),
        }
    } as ContractNotes<'TransparentNote' | 'TokenNote'>;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    
    /** admin() */
    admin: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** balance_of_private(owner: struct) */
    balance_of_private: ((owner: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** balance_of_public(owner: struct) */
    balance_of_public: ((owner: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** burn(from: struct, amount: field, nonce: field) */
    burn: ((from: AztecAddressLike, amount: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** burn_public(from: struct, amount: field, nonce: field) */
    burn_public: ((from: AztecAddressLike, amount: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** cancel_authwit(inner_hash: field) */
    cancel_authwit: ((inner_hash: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** compute_note_hash_and_optionally_a_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, compute_nullifier: boolean, serialized_note: array) */
    compute_note_hash_and_optionally_a_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, compute_nullifier: boolean, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** constructor(admin: struct, name: string, symbol: string, decimals: integer) */
    constructor: ((admin: AztecAddressLike, name: string, symbol: string, decimals: (bigint | number)) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** is_minter(minter: struct) */
    is_minter: ((minter: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** mint_private(amount: field, secret_hash: field) */
    mint_private: ((amount: FieldLike, secret_hash: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** mint_public(to: struct, amount: field) */
    mint_public: ((to: AztecAddressLike, amount: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** private_get_decimals() */
    private_get_decimals: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** private_get_name() */
    private_get_name: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** private_get_symbol() */
    private_get_symbol: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** privately_mint_private_note(amount: field) */
    privately_mint_private_note: ((amount: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** public_get_decimals() */
    public_get_decimals: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** public_get_name() */
    public_get_name: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** public_get_symbol() */
    public_get_symbol: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** redeem_shield(to: struct, amount: field, secret: field) */
    redeem_shield: ((to: AztecAddressLike, amount: FieldLike, secret: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** set_admin(new_admin: struct) */
    set_admin: ((new_admin: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** set_minter(minter: struct, approve: boolean) */
    set_minter: ((minter: AztecAddressLike, approve: boolean) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** setup_refund(fee_payer: struct, user: struct, funded_amount: field, user_randomness: field, fee_payer_randomness: field) */
    setup_refund: ((fee_payer: AztecAddressLike, user: AztecAddressLike, funded_amount: FieldLike, user_randomness: FieldLike, fee_payer_randomness: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** shield(from: struct, amount: field, secret_hash: field, nonce: field) */
    shield: ((from: AztecAddressLike, amount: FieldLike, secret_hash: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** total_supply() */
    total_supply: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** transfer(to: struct, amount: field) */
    transfer: ((to: AztecAddressLike, amount: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** transfer_from(from: struct, to: struct, amount: field, nonce: field) */
    transfer_from: ((from: AztecAddressLike, to: AztecAddressLike, amount: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** transfer_public(from: struct, to: struct, amount: field, nonce: field) */
    transfer_public: ((from: AztecAddressLike, to: AztecAddressLike, amount: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** unshield(from: struct, to: struct, amount: field, nonce: field) */
    unshield: ((from: AztecAddressLike, to: AztecAddressLike, amount: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };

  
    // Partial application is chosen is to avoid the duplication of so much codegen.
  private static decodeEvent<T>(fieldsLength: number, eventSelector: EventSelector, fields: string[]): (payload: L1EventPayload | undefined) => T | undefined {
    return (payload: L1EventPayload | undefined): T | undefined => {
      if (payload === undefined) {
        return undefined;
      }
      if (!eventSelector.equals(payload.eventTypeId)) {
        return undefined;
      }
      if (payload.event.items.length !== fieldsLength) {
        throw new Error(
          'Something is weird here, we have matching EventSelectors, but the actual payload has mismatched length',
        );
      }

      return fields.reduce(
        (acc, curr, i) => ({
          ...acc,
          [curr]: payload.event.items[i],
        }),
        {} as T,
      );
    };
  }

  public static get events(): { Transfer: {decode: (payload: L1EventPayload | undefined) => Transfer | undefined, eventSelector: EventSelector, fieldNames: string[] } } {
    return {
      Transfer: {
        decode: this.decodeEvent(3, EventSelector.fromSignature('Transfer(Field,Field,Field)'), ["from","to","amount"]),
      eventSelector: EventSelector.fromSignature('Transfer(Field,Field,Field)'),
      fieldNames: ["from","to","amount"],
      }
    };
  }
  
}