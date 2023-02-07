import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateIntegration = {
  __typename?: 'AggregateIntegration';
  _avg?: Maybe<IntegrationAvgAggregate>;
  _count?: Maybe<IntegrationCountAggregate>;
  _max?: Maybe<IntegrationMaxAggregate>;
  _min?: Maybe<IntegrationMinAggregate>;
  _sum?: Maybe<IntegrationSumAggregate>;
};

export type AggregateProto = {
  __typename?: 'AggregateProto';
  _avg?: Maybe<ProtoAvgAggregate>;
  _count?: Maybe<ProtoCountAggregate>;
  _max?: Maybe<ProtoMaxAggregate>;
  _min?: Maybe<ProtoMinAggregate>;
  _sum?: Maybe<ProtoSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AuthInput = {
  accessToken: Scalars['String'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  access_token: Scalars['String'];
  status: Scalars['String'];
  user: User;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumIntegrationProviderNullableFilter = {
  equals?: InputMaybe<IntegrationProvider>;
  in?: InputMaybe<Array<IntegrationProvider>>;
  not?: InputMaybe<NestedEnumIntegrationProviderNullableFilter>;
  notIn?: InputMaybe<Array<IntegrationProvider>>;
};

export type EnumIntegrationProviderNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumIntegrationProviderNullableFilter>;
  _min?: InputMaybe<NestedEnumIntegrationProviderNullableFilter>;
  equals?: InputMaybe<IntegrationProvider>;
  in?: InputMaybe<Array<IntegrationProvider>>;
  not?: InputMaybe<NestedEnumIntegrationProviderNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<IntegrationProvider>>;
};

export type EnumIntegrationStatusNullableFilter = {
  equals?: InputMaybe<IntegrationStatus>;
  in?: InputMaybe<Array<IntegrationStatus>>;
  not?: InputMaybe<NestedEnumIntegrationStatusNullableFilter>;
  notIn?: InputMaybe<Array<IntegrationStatus>>;
};

export type EnumIntegrationStatusNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumIntegrationStatusNullableFilter>;
  _min?: InputMaybe<NestedEnumIntegrationStatusNullableFilter>;
  equals?: InputMaybe<IntegrationStatus>;
  in?: InputMaybe<Array<IntegrationStatus>>;
  not?: InputMaybe<NestedEnumIntegrationStatusNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<IntegrationStatus>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Integration = {
  __typename?: 'Integration';
  createdAt: Scalars['DateTime'];
  externalId: Scalars['String'];
  id: Scalars['Int'];
  provider?: Maybe<IntegrationProvider>;
  status?: Maybe<IntegrationStatus>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type IntegrationAvgAggregate = {
  __typename?: 'IntegrationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type IntegrationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type IntegrationCountAggregate = {
  __typename?: 'IntegrationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  externalId: Scalars['Int'];
  id: Scalars['Int'];
  provider: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type IntegrationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type IntegrationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  externalId: Scalars['String'];
  provider?: InputMaybe<IntegrationProvider>;
  status?: InputMaybe<IntegrationStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIntegrationsInput;
};

export type IntegrationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  externalId: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<IntegrationProvider>;
  status?: InputMaybe<IntegrationStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type IntegrationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  externalId: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<IntegrationProvider>;
  status?: InputMaybe<IntegrationStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IntegrationCreateManyUserInputEnvelope = {
  data: Array<IntegrationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type IntegrationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IntegrationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<IntegrationCreateWithoutUserInput>>;
  createMany?: InputMaybe<IntegrationCreateManyUserInputEnvelope>;
};

export type IntegrationCreateOrConnectWithoutUserInput = {
  create: IntegrationCreateWithoutUserInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  externalId: Scalars['String'];
  provider?: InputMaybe<IntegrationProvider>;
  status?: InputMaybe<IntegrationStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IntegrationGroupBy = {
  __typename?: 'IntegrationGroupBy';
  _avg?: Maybe<IntegrationAvgAggregate>;
  _count?: Maybe<IntegrationCountAggregate>;
  _max?: Maybe<IntegrationMaxAggregate>;
  _min?: Maybe<IntegrationMinAggregate>;
  _sum?: Maybe<IntegrationSumAggregate>;
  createdAt: Scalars['DateTime'];
  externalId: Scalars['String'];
  id: Scalars['Int'];
  provider?: Maybe<IntegrationProvider>;
  status?: Maybe<IntegrationStatus>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type IntegrationListRelationFilter = {
  every?: InputMaybe<IntegrationWhereInput>;
  none?: InputMaybe<IntegrationWhereInput>;
  some?: InputMaybe<IntegrationWhereInput>;
};

export type IntegrationMaxAggregate = {
  __typename?: 'IntegrationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  provider?: Maybe<IntegrationProvider>;
  status?: Maybe<IntegrationStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type IntegrationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type IntegrationMinAggregate = {
  __typename?: 'IntegrationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  provider?: Maybe<IntegrationProvider>;
  status?: Maybe<IntegrationStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type IntegrationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type IntegrationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IntegrationOrderByWithAggregationInput = {
  _avg?: InputMaybe<IntegrationAvgOrderByAggregateInput>;
  _count?: InputMaybe<IntegrationCountOrderByAggregateInput>;
  _max?: InputMaybe<IntegrationMaxOrderByAggregateInput>;
  _min?: InputMaybe<IntegrationMinOrderByAggregateInput>;
  _sum?: InputMaybe<IntegrationSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type IntegrationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum IntegrationProvider {
  Spotify = 'SPOTIFY'
}

export enum IntegrationScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExternalId = 'externalId',
  Id = 'id',
  Provider = 'provider',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type IntegrationScalarWhereInput = {
  AND?: InputMaybe<Array<IntegrationScalarWhereInput>>;
  NOT?: InputMaybe<Array<IntegrationScalarWhereInput>>;
  OR?: InputMaybe<Array<IntegrationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  externalId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  provider?: InputMaybe<EnumIntegrationProviderNullableFilter>;
  status?: InputMaybe<EnumIntegrationStatusNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type IntegrationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<IntegrationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<IntegrationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<IntegrationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  externalId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  provider?: InputMaybe<EnumIntegrationProviderNullableWithAggregatesFilter>;
  status?: InputMaybe<EnumIntegrationStatusNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export enum IntegrationStatus {
  Connected = 'CONNECTED',
  Disconnected = 'DISCONNECTED'
}

export type IntegrationSumAggregate = {
  __typename?: 'IntegrationSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type IntegrationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type IntegrationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  externalId?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<NullableEnumIntegrationProviderFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableEnumIntegrationStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutIntegrationsInput>;
};

export type IntegrationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  externalId?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<NullableEnumIntegrationProviderFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableEnumIntegrationStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpdateManyWithWhereWithoutUserInput = {
  data: IntegrationUpdateManyMutationInput;
  where: IntegrationScalarWhereInput;
};

export type IntegrationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IntegrationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<IntegrationCreateWithoutUserInput>>;
  createMany?: InputMaybe<IntegrationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<IntegrationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IntegrationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IntegrationWhereUniqueInput>>;
  set?: InputMaybe<Array<IntegrationWhereUniqueInput>>;
  update?: InputMaybe<Array<IntegrationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<IntegrationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<IntegrationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type IntegrationUpdateWithWhereUniqueWithoutUserInput = {
  data: IntegrationUpdateWithoutUserInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  externalId?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<NullableEnumIntegrationProviderFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableEnumIntegrationStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpsertWithWhereUniqueWithoutUserInput = {
  create: IntegrationCreateWithoutUserInput;
  update: IntegrationUpdateWithoutUserInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationWhereInput = {
  AND?: InputMaybe<Array<IntegrationWhereInput>>;
  NOT?: InputMaybe<Array<IntegrationWhereInput>>;
  OR?: InputMaybe<Array<IntegrationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  externalId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  provider?: InputMaybe<EnumIntegrationProviderNullableFilter>;
  status?: InputMaybe<EnumIntegrationStatusNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type IntegrationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type IntegrationsInput = {
  accessToken: Scalars['String'];
  provider: IntegrationProvider;
};

export type IntegrationsResponse = {
  __typename?: 'IntegrationsResponse';
  integration: Integration;
  status: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: AuthResponse;
  createIntegration: Integration;
  createManyIntegration: AffectedRowsOutput;
  createManyProto: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createProto: Proto;
  createUser: User;
  deleteIntegration?: Maybe<Integration>;
  deleteManyIntegration: AffectedRowsOutput;
  deleteManyProto: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteProto?: Maybe<Proto>;
  deleteUser?: Maybe<User>;
  refreshSpotifyAccessToken: SpotifyResponse;
  registerIntegration: IntegrationsResponse;
  swapSpotifyCode: SpotifyResponse;
  updateIntegration?: Maybe<Integration>;
  updateManyIntegration: AffectedRowsOutput;
  updateManyProto: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateProto?: Maybe<Proto>;
  updateUser?: Maybe<User>;
  upsertIntegration: Integration;
  upsertProto: Proto;
  upsertUser: User;
};


export type MutationAuthenticateArgs = {
  input: AuthInput;
};


export type MutationCreateIntegrationArgs = {
  data: IntegrationCreateInput;
};


export type MutationCreateManyIntegrationArgs = {
  data: Array<IntegrationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProtoArgs = {
  data: Array<ProtoCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateProtoArgs = {
  data: ProtoCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteIntegrationArgs = {
  where: IntegrationWhereUniqueInput;
};


export type MutationDeleteManyIntegrationArgs = {
  where?: InputMaybe<IntegrationWhereInput>;
};


export type MutationDeleteManyProtoArgs = {
  where?: InputMaybe<ProtoWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteProtoArgs = {
  where: ProtoWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationRefreshSpotifyAccessTokenArgs = {
  input: SpotifyInput;
};


export type MutationRegisterIntegrationArgs = {
  input: IntegrationsInput;
};


export type MutationSwapSpotifyCodeArgs = {
  input: SpotifyInput;
};


export type MutationUpdateIntegrationArgs = {
  data: IntegrationUpdateInput;
  where: IntegrationWhereUniqueInput;
};


export type MutationUpdateManyIntegrationArgs = {
  data: IntegrationUpdateManyMutationInput;
  where?: InputMaybe<IntegrationWhereInput>;
};


export type MutationUpdateManyProtoArgs = {
  data: ProtoUpdateManyMutationInput;
  where?: InputMaybe<ProtoWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateProtoArgs = {
  data: ProtoUpdateInput;
  where: ProtoWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertIntegrationArgs = {
  create: IntegrationCreateInput;
  update: IntegrationUpdateInput;
  where: IntegrationWhereUniqueInput;
};


export type MutationUpsertProtoArgs = {
  create: ProtoCreateInput;
  update: ProtoUpdateInput;
  where: ProtoWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumIntegrationProviderNullableFilter = {
  equals?: InputMaybe<IntegrationProvider>;
  in?: InputMaybe<Array<IntegrationProvider>>;
  not?: InputMaybe<NestedEnumIntegrationProviderNullableFilter>;
  notIn?: InputMaybe<Array<IntegrationProvider>>;
};

export type NestedEnumIntegrationProviderNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumIntegrationProviderNullableFilter>;
  _min?: InputMaybe<NestedEnumIntegrationProviderNullableFilter>;
  equals?: InputMaybe<IntegrationProvider>;
  in?: InputMaybe<Array<IntegrationProvider>>;
  not?: InputMaybe<NestedEnumIntegrationProviderNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<IntegrationProvider>>;
};

export type NestedEnumIntegrationStatusNullableFilter = {
  equals?: InputMaybe<IntegrationStatus>;
  in?: InputMaybe<Array<IntegrationStatus>>;
  not?: InputMaybe<NestedEnumIntegrationStatusNullableFilter>;
  notIn?: InputMaybe<Array<IntegrationStatus>>;
};

export type NestedEnumIntegrationStatusNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumIntegrationStatusNullableFilter>;
  _min?: InputMaybe<NestedEnumIntegrationStatusNullableFilter>;
  equals?: InputMaybe<IntegrationStatus>;
  in?: InputMaybe<Array<IntegrationStatus>>;
  not?: InputMaybe<NestedEnumIntegrationStatusNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<IntegrationStatus>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableEnumIntegrationProviderFieldUpdateOperationsInput = {
  set?: InputMaybe<IntegrationProvider>;
};

export type NullableEnumIntegrationStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<IntegrationStatus>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Proto = {
  __typename?: 'Proto';
  createdAt: Scalars['DateTime'];
  dateString?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type ProtoAvgAggregate = {
  __typename?: 'ProtoAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ProtoAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProtoCountAggregate = {
  __typename?: 'ProtoCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  dateString: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProtoCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dateString?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProtoCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateString?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProtosInput;
};

export type ProtoCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateString?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type ProtoCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateString?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProtoCreateManyUserInputEnvelope = {
  data: Array<ProtoCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProtoCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ProtoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProtoCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ProtoCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProtoCreateManyUserInputEnvelope>;
};

export type ProtoCreateOrConnectWithoutUserInput = {
  create: ProtoCreateWithoutUserInput;
  where: ProtoWhereUniqueInput;
};

export type ProtoCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateString?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProtoGroupBy = {
  __typename?: 'ProtoGroupBy';
  _avg?: Maybe<ProtoAvgAggregate>;
  _count?: Maybe<ProtoCountAggregate>;
  _max?: Maybe<ProtoMaxAggregate>;
  _min?: Maybe<ProtoMinAggregate>;
  _sum?: Maybe<ProtoSumAggregate>;
  createdAt: Scalars['DateTime'];
  dateString?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type ProtoListRelationFilter = {
  every?: InputMaybe<ProtoWhereInput>;
  none?: InputMaybe<ProtoWhereInput>;
  some?: InputMaybe<ProtoWhereInput>;
};

export type ProtoMaxAggregate = {
  __typename?: 'ProtoMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dateString?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ProtoMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dateString?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProtoMinAggregate = {
  __typename?: 'ProtoMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dateString?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ProtoMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dateString?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProtoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProtoOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProtoAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProtoCountOrderByAggregateInput>;
  _max?: InputMaybe<ProtoMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProtoMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProtoSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dateString?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProtoOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  dateString?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ProtoScalarFieldEnum {
  CreatedAt = 'createdAt',
  DateString = 'dateString',
  Description = 'description',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ProtoScalarWhereInput = {
  AND?: InputMaybe<Array<ProtoScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProtoScalarWhereInput>>;
  OR?: InputMaybe<Array<ProtoScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateString?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ProtoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProtoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProtoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProtoScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateString?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ProtoSumAggregate = {
  __typename?: 'ProtoSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ProtoSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProtoUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateString?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProtosInput>;
};

export type ProtoUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateString?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProtoUpdateManyWithWhereWithoutUserInput = {
  data: ProtoUpdateManyMutationInput;
  where: ProtoScalarWhereInput;
};

export type ProtoUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ProtoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProtoCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ProtoCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProtoCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ProtoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProtoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProtoWhereUniqueInput>>;
  set?: InputMaybe<Array<ProtoWhereUniqueInput>>;
  update?: InputMaybe<Array<ProtoUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ProtoUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ProtoUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ProtoUpdateWithWhereUniqueWithoutUserInput = {
  data: ProtoUpdateWithoutUserInput;
  where: ProtoWhereUniqueInput;
};

export type ProtoUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateString?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProtoUpsertWithWhereUniqueWithoutUserInput = {
  create: ProtoCreateWithoutUserInput;
  update: ProtoUpdateWithoutUserInput;
  where: ProtoWhereUniqueInput;
};

export type ProtoWhereInput = {
  AND?: InputMaybe<Array<ProtoWhereInput>>;
  NOT?: InputMaybe<Array<ProtoWhereInput>>;
  OR?: InputMaybe<Array<ProtoWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateString?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ProtoWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateIntegration: AggregateIntegration;
  aggregateProto: AggregateProto;
  aggregateUser: AggregateUser;
  findFirstIntegration?: Maybe<Integration>;
  findFirstProto?: Maybe<Proto>;
  findFirstUser?: Maybe<User>;
  getMemoByDateString?: Maybe<Proto>;
  groupByIntegration: Array<IntegrationGroupBy>;
  groupByProto: Array<ProtoGroupBy>;
  groupByUser: Array<UserGroupBy>;
  integration?: Maybe<Integration>;
  integrations: Array<Integration>;
  proto?: Maybe<Proto>;
  protos: Array<Proto>;
  refreshAccessToken: AuthResponse;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateIntegrationArgs = {
  cursor?: InputMaybe<IntegrationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<IntegrationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationWhereInput>;
};


export type QueryAggregateProtoArgs = {
  cursor?: InputMaybe<ProtoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProtoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProtoWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstIntegrationArgs = {
  cursor?: InputMaybe<IntegrationWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationWhereInput>;
};


export type QueryFindFirstProtoArgs = {
  cursor?: InputMaybe<ProtoWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProtoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProtoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProtoWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetMemoByDateStringArgs = {
  dateString: Scalars['String'];
};


export type QueryGroupByIntegrationArgs = {
  by: Array<IntegrationScalarFieldEnum>;
  having?: InputMaybe<IntegrationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IntegrationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationWhereInput>;
};


export type QueryGroupByProtoArgs = {
  by: Array<ProtoScalarFieldEnum>;
  having?: InputMaybe<ProtoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProtoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProtoWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryIntegrationArgs = {
  where: IntegrationWhereUniqueInput;
};


export type QueryIntegrationsArgs = {
  cursor?: InputMaybe<IntegrationWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationWhereInput>;
};


export type QueryProtoArgs = {
  where: ProtoWhereUniqueInput;
};


export type QueryProtosArgs = {
  cursor?: InputMaybe<ProtoWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProtoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProtoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProtoWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SpotifyInput = {
  code?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type SpotifyResponse = {
  __typename?: 'SpotifyResponse';
  accessToken: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  integrations: Array<Integration>;
  name: Scalars['String'];
  picture: Scalars['String'];
  protos: Array<Proto>;
};


export type UserIntegrationsArgs = {
  cursor?: InputMaybe<IntegrationWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationWhereInput>;
};


export type UserProtosArgs = {
  cursor?: InputMaybe<ProtoWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProtoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProtoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProtoWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  integrations: Scalars['Int'];
  protos: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  picture: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  integrations?: InputMaybe<IntegrationCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  picture: Scalars['String'];
  protos?: InputMaybe<ProtoCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  picture: Scalars['String'];
};

export type UserCreateNestedOneWithoutIntegrationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutIntegrationsInput>;
  create?: InputMaybe<UserCreateWithoutIntegrationsInput>;
};

export type UserCreateNestedOneWithoutProtosInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProtosInput>;
  create?: InputMaybe<UserCreateWithoutProtosInput>;
};

export type UserCreateOrConnectWithoutIntegrationsInput = {
  create: UserCreateWithoutIntegrationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProtosInput = {
  create: UserCreateWithoutProtosInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutIntegrationsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  picture: Scalars['String'];
  protos?: InputMaybe<ProtoCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutProtosInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  integrations?: InputMaybe<IntegrationCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  picture: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  picture: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  integrations?: InputMaybe<IntegrationOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  protos?: InputMaybe<ProtoOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Picture = 'picture'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  picture?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  integrations?: InputMaybe<IntegrationUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  protos?: InputMaybe<ProtoUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutIntegrationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutIntegrationsInput>;
  create?: InputMaybe<UserCreateWithoutIntegrationsInput>;
  update?: InputMaybe<UserUpdateWithoutIntegrationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutIntegrationsInput>;
};

export type UserUpdateOneRequiredWithoutProtosInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProtosInput>;
  create?: InputMaybe<UserCreateWithoutProtosInput>;
  update?: InputMaybe<UserUpdateWithoutProtosInput>;
  upsert?: InputMaybe<UserUpsertWithoutProtosInput>;
};

export type UserUpdateWithoutIntegrationsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  protos?: InputMaybe<ProtoUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutProtosInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  integrations?: InputMaybe<IntegrationUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutIntegrationsInput = {
  create: UserCreateWithoutIntegrationsInput;
  update: UserUpdateWithoutIntegrationsInput;
};

export type UserUpsertWithoutProtosInput = {
  create: UserCreateWithoutProtosInput;
  update: UserUpdateWithoutProtosInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  integrations?: InputMaybe<IntegrationListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<StringFilter>;
  protos?: InputMaybe<ProtoListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type AuthenticateMutationVariables = Exact<{
  input: AuthInput;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthResponse', status: string, access_token: string, user: { __typename?: 'User', id: number, email: string, name: string, picture: string } } };

export type CreateProtoMutationMutationVariables = Exact<{
  data: ProtoCreateInput;
}>;


export type CreateProtoMutationMutation = { __typename?: 'Mutation', createProto: { __typename?: 'Proto', id: number, title?: string | null } };

export type RegisterIntegrationMutationVariables = Exact<{
  input: IntegrationsInput;
}>;


export type RegisterIntegrationMutation = { __typename?: 'Mutation', registerIntegration: { __typename?: 'IntegrationsResponse', integration: { __typename?: 'Integration', id: number, externalId: string, createdAt: any, updatedAt: any } } };

export type UpdateProtoMutationMutationVariables = Exact<{
  data: ProtoUpdateInput;
  where: ProtoWhereUniqueInput;
}>;


export type UpdateProtoMutationMutation = { __typename?: 'Mutation', updateProto?: { __typename?: 'Proto', id: number, title?: string | null, description?: string | null, dateString?: string | null, createdAt: any, updatedAt: any, userId: number } | null };

export type GetMemoByDateStringQueryVariables = Exact<{
  dateString: Scalars['String'];
}>;


export type GetMemoByDateStringQuery = { __typename?: 'Query', getMemoByDateString?: { __typename?: 'Proto', id: number, title?: string | null, description?: string | null, dateString?: string | null, createdAt: any, updatedAt: any } | null };

export type IntegrationsQueryVariables = Exact<{
  where?: InputMaybe<IntegrationWhereInput>;
}>;


export type IntegrationsQuery = { __typename?: 'Query', integrations: Array<{ __typename?: 'Integration', id: number, externalId: string, provider?: IntegrationProvider | null, status?: IntegrationStatus | null }> };

export type ProtosQueryQueryVariables = Exact<{
  where?: InputMaybe<ProtoWhereInput>;
}>;


export type ProtosQueryQuery = { __typename?: 'Query', protos: Array<{ __typename?: 'Proto', id: number, title?: string | null, description?: string | null, dateString?: string | null, createdAt: any, updatedAt: any }> };

export type SwapSpotifyCodeMutationVariables = Exact<{
  input: SpotifyInput;
}>;


export type SwapSpotifyCodeMutation = { __typename?: 'Mutation', swapSpotifyCode: { __typename?: 'SpotifyResponse', accessToken: string, refreshToken?: string | null } };

export type RefreshSpotifyAccessTokenMutationVariables = Exact<{
  input: SpotifyInput;
}>;


export type RefreshSpotifyAccessTokenMutation = { __typename?: 'Mutation', refreshSpotifyAccessToken: { __typename?: 'SpotifyResponse', accessToken: string } };


export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const CreateProtoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProtoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProtoCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProto"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateProtoMutationMutation, CreateProtoMutationMutationVariables>;
export const RegisterIntegrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterIntegration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IntegrationsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerIntegration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterIntegrationMutation, RegisterIntegrationMutationVariables>;
export const UpdateProtoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProtoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProtoUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProtoWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProto"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateString"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<UpdateProtoMutationMutation, UpdateProtoMutationMutationVariables>;
export const GetMemoByDateStringDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMemoByDateString"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMemoByDateString"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateString"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateString"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetMemoByDateStringQuery, GetMemoByDateStringQueryVariables>;
export const IntegrationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Integrations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntegrationWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<IntegrationsQuery, IntegrationsQueryVariables>;
export const ProtosQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProtosQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProtoWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"protos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateString"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ProtosQueryQuery, ProtosQueryQueryVariables>;
export const SwapSpotifyCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SwapSpotifyCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SpotifyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"swapSpotifyCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<SwapSpotifyCodeMutation, SwapSpotifyCodeMutationVariables>;
export const RefreshSpotifyAccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshSpotifyAccessToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SpotifyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshSpotifyAccessToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RefreshSpotifyAccessTokenMutation, RefreshSpotifyAccessTokenMutationVariables>;