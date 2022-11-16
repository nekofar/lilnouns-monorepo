/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace INounsSeeder {
  export type SeedStruct = {
    background: PromiseOrValue<BigNumberish>;
    body: PromiseOrValue<BigNumberish>;
    accessory: PromiseOrValue<BigNumberish>;
    head: PromiseOrValue<BigNumberish>;
    glasses: PromiseOrValue<BigNumberish>;
  };

  export type SeedStructOutput = [number, number, number, number, number] & {
    background: number;
    body: number;
    accessory: number;
    head: number;
    glasses: number;
  };
}

export interface NounsDescriptorInterface extends utils.Interface {
  functions: {
    "accessories(uint256)": FunctionFragment;
    "accessoryCount()": FunctionFragment;
    "addAccessory(bytes)": FunctionFragment;
    "addBackground(string)": FunctionFragment;
    "addBody(bytes)": FunctionFragment;
    "addColorToPalette(uint8,string)": FunctionFragment;
    "addGlasses(bytes)": FunctionFragment;
    "addHead(bytes)": FunctionFragment;
    "addManyAccessories(bytes[])": FunctionFragment;
    "addManyBackgrounds(string[])": FunctionFragment;
    "addManyBodies(bytes[])": FunctionFragment;
    "addManyColorsToPalette(uint8,string[])": FunctionFragment;
    "addManyGlasses(bytes[])": FunctionFragment;
    "addManyHeads(bytes[])": FunctionFragment;
    "arePartsLocked()": FunctionFragment;
    "backgroundCount()": FunctionFragment;
    "backgrounds(uint256)": FunctionFragment;
    "baseURI()": FunctionFragment;
    "bodies(uint256)": FunctionFragment;
    "bodyCount()": FunctionFragment;
    "dataURI(uint256,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
    "generateSVGImage((uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
    "genericDataURI(string,string,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
    "glasses(uint256)": FunctionFragment;
    "glassesCount()": FunctionFragment;
    "headCount()": FunctionFragment;
    "heads(uint256)": FunctionFragment;
    "isDataURIEnabled()": FunctionFragment;
    "lockParts()": FunctionFragment;
    "owner()": FunctionFragment;
    "palettes(uint8,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBaseURI(string)": FunctionFragment;
    "toggleDataURIEnabled()": FunctionFragment;
    "tokenURI(uint256,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accessories"
      | "accessoryCount"
      | "addAccessory"
      | "addBackground"
      | "addBody"
      | "addColorToPalette"
      | "addGlasses"
      | "addHead"
      | "addManyAccessories"
      | "addManyBackgrounds"
      | "addManyBodies"
      | "addManyColorsToPalette"
      | "addManyGlasses"
      | "addManyHeads"
      | "arePartsLocked"
      | "backgroundCount"
      | "backgrounds"
      | "baseURI"
      | "bodies"
      | "bodyCount"
      | "dataURI"
      | "generateSVGImage"
      | "genericDataURI"
      | "glasses"
      | "glassesCount"
      | "headCount"
      | "heads"
      | "isDataURIEnabled"
      | "lockParts"
      | "owner"
      | "palettes"
      | "renounceOwnership"
      | "setBaseURI"
      | "toggleDataURIEnabled"
      | "tokenURI"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accessories",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "accessoryCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAccessory",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "addBackground",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addBody",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "addColorToPalette",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addGlasses",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "addHead",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyAccessories",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyBackgrounds",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyBodies",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyColorsToPalette",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyGlasses",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyHeads",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "arePartsLocked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "backgroundCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "backgrounds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bodies",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "bodyCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dataURI",
    values: [PromiseOrValue<BigNumberish>, INounsSeeder.SeedStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "generateSVGImage",
    values: [INounsSeeder.SeedStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "genericDataURI",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      INounsSeeder.SeedStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "glasses",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "glassesCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "headCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "heads",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isDataURIEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lockParts", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "palettes",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseURI",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleDataURIEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [PromiseOrValue<BigNumberish>, INounsSeeder.SeedStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "accessories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accessoryCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAccessory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addBackground",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addBody", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addColorToPalette",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addGlasses", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addHead", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addManyAccessories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyBackgrounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyBodies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyColorsToPalette",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyGlasses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyHeads",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arePartsLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backgroundCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backgrounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bodies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bodyCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dataURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateSVGImage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genericDataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "glasses", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "glassesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "headCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "heads", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isDataURIEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockParts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "palettes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toggleDataURIEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "BaseURIUpdated(string)": EventFragment;
    "DataURIToggled(bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PartsLocked()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseURIUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DataURIToggled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PartsLocked"): EventFragment;
}

export interface BaseURIUpdatedEventObject {
  baseURI: string;
}
export type BaseURIUpdatedEvent = TypedEvent<
  [string],
  BaseURIUpdatedEventObject
>;

export type BaseURIUpdatedEventFilter = TypedEventFilter<BaseURIUpdatedEvent>;

export interface DataURIToggledEventObject {
  enabled: boolean;
}
export type DataURIToggledEvent = TypedEvent<
  [boolean],
  DataURIToggledEventObject
>;

export type DataURIToggledEventFilter = TypedEventFilter<DataURIToggledEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PartsLockedEventObject {}
export type PartsLockedEvent = TypedEvent<[], PartsLockedEventObject>;

export type PartsLockedEventFilter = TypedEventFilter<PartsLockedEvent>;

export interface NounsDescriptor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NounsDescriptorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accessories(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    accessoryCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    addAccessory(
      _accessory: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addBackground(
      _background: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addBody(
      _body: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addColorToPalette(
      _paletteIndex: PromiseOrValue<BigNumberish>,
      _color: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addGlasses(
      _glasses: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addHead(
      _head: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addManyAccessories(
      _accessories: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addManyBackgrounds(
      _backgrounds: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addManyBodies(
      _bodies: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addManyColorsToPalette(
      paletteIndex: PromiseOrValue<BigNumberish>,
      newColors: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addManyGlasses(
      _glasses: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addManyHeads(
      _heads: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    arePartsLocked(overrides?: CallOverrides): Promise<[boolean]>;

    backgroundCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    backgrounds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    baseURI(overrides?: CallOverrides): Promise<[string]>;

    bodies(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    bodyCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    dataURI(
      tokenId: PromiseOrValue<BigNumberish>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    generateSVGImage(
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    genericDataURI(
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    glasses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    glassesCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    headCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    heads(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isDataURIEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    lockParts(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    palettes(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBaseURI(
      _baseURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    toggleDataURIEnabled(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  accessories(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;

  addAccessory(
    _accessory: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addBackground(
    _background: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addBody(
    _body: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addColorToPalette(
    _paletteIndex: PromiseOrValue<BigNumberish>,
    _color: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addGlasses(
    _glasses: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addHead(
    _head: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addManyAccessories(
    _accessories: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addManyBackgrounds(
    _backgrounds: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addManyBodies(
    _bodies: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addManyColorsToPalette(
    paletteIndex: PromiseOrValue<BigNumberish>,
    newColors: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addManyGlasses(
    _glasses: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addManyHeads(
    _heads: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  arePartsLocked(overrides?: CallOverrides): Promise<boolean>;

  backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;

  backgrounds(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  baseURI(overrides?: CallOverrides): Promise<string>;

  bodies(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  bodyCount(overrides?: CallOverrides): Promise<BigNumber>;

  dataURI(
    tokenId: PromiseOrValue<BigNumberish>,
    seed: INounsSeeder.SeedStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  generateSVGImage(
    seed: INounsSeeder.SeedStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  genericDataURI(
    name: PromiseOrValue<string>,
    description: PromiseOrValue<string>,
    seed: INounsSeeder.SeedStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  glasses(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  glassesCount(overrides?: CallOverrides): Promise<BigNumber>;

  headCount(overrides?: CallOverrides): Promise<BigNumber>;

  heads(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  isDataURIEnabled(overrides?: CallOverrides): Promise<boolean>;

  lockParts(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  palettes(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBaseURI(
    _baseURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  toggleDataURIEnabled(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenURI(
    tokenId: PromiseOrValue<BigNumberish>,
    seed: INounsSeeder.SeedStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accessories(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;

    addAccessory(
      _accessory: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    addBackground(
      _background: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addBody(
      _body: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    addColorToPalette(
      _paletteIndex: PromiseOrValue<BigNumberish>,
      _color: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addGlasses(
      _glasses: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    addHead(
      _head: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    addManyAccessories(
      _accessories: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    addManyBackgrounds(
      _backgrounds: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    addManyBodies(
      _bodies: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    addManyColorsToPalette(
      paletteIndex: PromiseOrValue<BigNumberish>,
      newColors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    addManyGlasses(
      _glasses: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    addManyHeads(
      _heads: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    arePartsLocked(overrides?: CallOverrides): Promise<boolean>;

    backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;

    backgrounds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    baseURI(overrides?: CallOverrides): Promise<string>;

    bodies(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    bodyCount(overrides?: CallOverrides): Promise<BigNumber>;

    dataURI(
      tokenId: PromiseOrValue<BigNumberish>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    generateSVGImage(
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    genericDataURI(
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    glasses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    glassesCount(overrides?: CallOverrides): Promise<BigNumber>;

    headCount(overrides?: CallOverrides): Promise<BigNumber>;

    heads(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    isDataURIEnabled(overrides?: CallOverrides): Promise<boolean>;

    lockParts(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    palettes(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBaseURI(
      _baseURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    toggleDataURIEnabled(overrides?: CallOverrides): Promise<void>;

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BaseURIUpdated(string)"(baseURI?: null): BaseURIUpdatedEventFilter;
    BaseURIUpdated(baseURI?: null): BaseURIUpdatedEventFilter;

    "DataURIToggled(bool)"(enabled?: null): DataURIToggledEventFilter;
    DataURIToggled(enabled?: null): DataURIToggledEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "PartsLocked()"(): PartsLockedEventFilter;
    PartsLocked(): PartsLockedEventFilter;
  };

  estimateGas: {
    accessories(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;

    addAccessory(
      _accessory: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addBackground(
      _background: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addBody(
      _body: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addColorToPalette(
      _paletteIndex: PromiseOrValue<BigNumberish>,
      _color: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addGlasses(
      _glasses: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addHead(
      _head: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addManyAccessories(
      _accessories: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addManyBackgrounds(
      _backgrounds: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addManyBodies(
      _bodies: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addManyColorsToPalette(
      paletteIndex: PromiseOrValue<BigNumberish>,
      newColors: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addManyGlasses(
      _glasses: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addManyHeads(
      _heads: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    arePartsLocked(overrides?: CallOverrides): Promise<BigNumber>;

    backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;

    backgrounds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseURI(overrides?: CallOverrides): Promise<BigNumber>;

    bodies(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bodyCount(overrides?: CallOverrides): Promise<BigNumber>;

    dataURI(
      tokenId: PromiseOrValue<BigNumberish>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateSVGImage(
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    genericDataURI(
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    glasses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    glassesCount(overrides?: CallOverrides): Promise<BigNumber>;

    headCount(overrides?: CallOverrides): Promise<BigNumber>;

    heads(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isDataURIEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    lockParts(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    palettes(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBaseURI(
      _baseURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    toggleDataURIEnabled(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accessories(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accessoryCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAccessory(
      _accessory: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addBackground(
      _background: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addBody(
      _body: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addColorToPalette(
      _paletteIndex: PromiseOrValue<BigNumberish>,
      _color: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addGlasses(
      _glasses: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addHead(
      _head: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addManyAccessories(
      _accessories: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addManyBackgrounds(
      _backgrounds: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addManyBodies(
      _bodies: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addManyColorsToPalette(
      paletteIndex: PromiseOrValue<BigNumberish>,
      newColors: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addManyGlasses(
      _glasses: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addManyHeads(
      _heads: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    arePartsLocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    backgroundCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    backgrounds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bodies(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bodyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dataURI(
      tokenId: PromiseOrValue<BigNumberish>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateSVGImage(
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    genericDataURI(
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    glasses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    glassesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    headCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    heads(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isDataURIEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockParts(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    palettes(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBaseURI(
      _baseURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    toggleDataURIEnabled(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      seed: INounsSeeder.SeedStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}