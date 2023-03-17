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

export type AggregateIntegrationData = {
  __typename?: 'AggregateIntegrationData';
  _avg?: Maybe<IntegrationDataAvgAggregate>;
  _count?: Maybe<IntegrationDataCountAggregate>;
  _max?: Maybe<IntegrationDataMaxAggregate>;
  _min?: Maybe<IntegrationDataMinAggregate>;
  _sum?: Maybe<IntegrationDataSumAggregate>;
};

export type AggregateIntegrationDataOnProtos = {
  __typename?: 'AggregateIntegrationDataOnProtos';
  _avg?: Maybe<IntegrationDataOnProtosAvgAggregate>;
  _count?: Maybe<IntegrationDataOnProtosCountAggregate>;
  _max?: Maybe<IntegrationDataOnProtosMaxAggregate>;
  _min?: Maybe<IntegrationDataOnProtosMinAggregate>;
  _sum?: Maybe<IntegrationDataOnProtosSumAggregate>;
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

export type Album = {
  __typename?: 'Album';
  artists: Array<Artist>;
  external_urls: ExternalUrLs;
  images: Array<Image>;
};

export type Artist = {
  __typename?: 'Artist';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type AuthInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  user?: InputMaybe<Scalars['String']>;
};

export enum AuthProvider {
  Apple = 'APPLE',
  Google = 'GOOGLE'
}

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

export type EnumAuthProviderFieldUpdateOperationsInput = {
  set?: InputMaybe<AuthProvider>;
};

export type EnumAuthProviderFilter = {
  equals?: InputMaybe<AuthProvider>;
  in?: InputMaybe<Array<AuthProvider>>;
  not?: InputMaybe<NestedEnumAuthProviderFilter>;
  notIn?: InputMaybe<Array<AuthProvider>>;
};

export type EnumAuthProviderWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAuthProviderFilter>;
  _min?: InputMaybe<NestedEnumAuthProviderFilter>;
  equals?: InputMaybe<AuthProvider>;
  in?: InputMaybe<Array<AuthProvider>>;
  not?: InputMaybe<NestedEnumAuthProviderWithAggregatesFilter>;
  notIn?: InputMaybe<Array<AuthProvider>>;
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

export type ExternalUrLs = {
  __typename?: 'ExternalURLs';
  spotify: Scalars['String'];
};

export type GetPlaybackStateResponse = {
  __typename?: 'GetPlaybackStateResponse';
  item: SpotifyItem;
  progress_ms: Scalars['Float'];
};

export type Image = {
  __typename?: 'Image';
  height: Scalars['Float'];
  url: Scalars['String'];
  width: Scalars['Float'];
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

export type IntegrationData = {
  __typename?: 'IntegrationData';
  _count?: Maybe<IntegrationDataCount>;
  createdAt: Scalars['DateTime'];
  data: Scalars['String'];
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  protos: Array<IntegrationDataOnProtos>;
  search: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type IntegrationDataProtosArgs = {
  cursor?: InputMaybe<IntegrationDataOnProtosWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationDataOnProtosScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationDataOnProtosOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataOnProtosWhereInput>;
};

export type IntegrationDataAvgAggregate = {
  __typename?: 'IntegrationDataAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type IntegrationDataAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type IntegrationDataCount = {
  __typename?: 'IntegrationDataCount';
  protos: Scalars['Int'];
};

export type IntegrationDataCountAggregate = {
  __typename?: 'IntegrationDataCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  data: Scalars['Int'];
  externalId: Scalars['Int'];
  id: Scalars['Int'];
  search: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type IntegrationDataCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  search?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationDataCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  data: Scalars['String'];
  externalId?: InputMaybe<Scalars['String']>;
  protos?: InputMaybe<IntegrationDataOnProtosCreateNestedManyWithoutIntegrationDataInput>;
  search: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IntegrationDataCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  data: Scalars['String'];
  externalId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  search: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IntegrationDataCreateNestedOneWithoutProtosInput = {
  connect?: InputMaybe<IntegrationDataWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IntegrationDataCreateOrConnectWithoutProtosInput>;
  create?: InputMaybe<IntegrationDataCreateWithoutProtosInput>;
};

export type IntegrationDataCreateOrConnectWithoutProtosInput = {
  create: IntegrationDataCreateWithoutProtosInput;
  where: IntegrationDataWhereUniqueInput;
};

export type IntegrationDataCreateWithoutProtosInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  data: Scalars['String'];
  externalId?: InputMaybe<Scalars['String']>;
  search: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IntegrationDataGroupBy = {
  __typename?: 'IntegrationDataGroupBy';
  _avg?: Maybe<IntegrationDataAvgAggregate>;
  _count?: Maybe<IntegrationDataCountAggregate>;
  _max?: Maybe<IntegrationDataMaxAggregate>;
  _min?: Maybe<IntegrationDataMinAggregate>;
  _sum?: Maybe<IntegrationDataSumAggregate>;
  createdAt: Scalars['DateTime'];
  data: Scalars['String'];
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  search: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IntegrationDataMaxAggregate = {
  __typename?: 'IntegrationDataMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationDataMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  search?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationDataMinAggregate = {
  __typename?: 'IntegrationDataMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationDataMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  search?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationDataOnProtos = {
  __typename?: 'IntegrationDataOnProtos';
  assignedAt: Scalars['DateTime'];
  integrationData: IntegrationData;
  integrationDataId: Scalars['Int'];
  proto: Proto;
  protoId: Scalars['Int'];
};

export type IntegrationDataOnProtosAvgAggregate = {
  __typename?: 'IntegrationDataOnProtosAvgAggregate';
  integrationDataId?: Maybe<Scalars['Float']>;
  protoId?: Maybe<Scalars['Float']>;
};

export type IntegrationDataOnProtosAvgOrderByAggregateInput = {
  integrationDataId?: InputMaybe<SortOrder>;
  protoId?: InputMaybe<SortOrder>;
};

export type IntegrationDataOnProtosCountAggregate = {
  __typename?: 'IntegrationDataOnProtosCountAggregate';
  _all: Scalars['Int'];
  assignedAt: Scalars['Int'];
  integrationDataId: Scalars['Int'];
  protoId: Scalars['Int'];
};

export type IntegrationDataOnProtosCountOrderByAggregateInput = {
  assignedAt?: InputMaybe<SortOrder>;
  integrationDataId?: InputMaybe<SortOrder>;
  protoId?: InputMaybe<SortOrder>;
};

export type IntegrationDataOnProtosCreateInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  integrationData: IntegrationDataCreateNestedOneWithoutProtosInput;
  proto: ProtoCreateNestedOneWithoutIntegrationsInput;
};

export type IntegrationDataOnProtosCreateManyInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  integrationDataId: Scalars['Int'];
  protoId: Scalars['Int'];
};

export type IntegrationDataOnProtosCreateManyIntegrationDataInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  protoId: Scalars['Int'];
};

export type IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope = {
  data: Array<IntegrationDataOnProtosCreateManyIntegrationDataInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type IntegrationDataOnProtosCreateManyProtoInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  integrationDataId: Scalars['Int'];
};

export type IntegrationDataOnProtosCreateManyProtoInputEnvelope = {
  data: Array<IntegrationDataOnProtosCreateManyProtoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type IntegrationDataOnProtosCreateNestedManyWithoutIntegrationDataInput = {
  connect?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput>>;
  create?: InputMaybe<Array<IntegrationDataOnProtosCreateWithoutIntegrationDataInput>>;
  createMany?: InputMaybe<IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope>;
};

export type IntegrationDataOnProtosCreateNestedManyWithoutProtoInput = {
  connect?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IntegrationDataOnProtosCreateOrConnectWithoutProtoInput>>;
  create?: InputMaybe<Array<IntegrationDataOnProtosCreateWithoutProtoInput>>;
  createMany?: InputMaybe<IntegrationDataOnProtosCreateManyProtoInputEnvelope>;
};

export type IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput = {
  create: IntegrationDataOnProtosCreateWithoutIntegrationDataInput;
  where: IntegrationDataOnProtosWhereUniqueInput;
};

export type IntegrationDataOnProtosCreateOrConnectWithoutProtoInput = {
  create: IntegrationDataOnProtosCreateWithoutProtoInput;
  where: IntegrationDataOnProtosWhereUniqueInput;
};

export type IntegrationDataOnProtosCreateWithoutIntegrationDataInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  proto: ProtoCreateNestedOneWithoutIntegrationsInput;
};

export type IntegrationDataOnProtosCreateWithoutProtoInput = {
  assignedAt?: InputMaybe<Scalars['DateTime']>;
  integrationData: IntegrationDataCreateNestedOneWithoutProtosInput;
};

export type IntegrationDataOnProtosGroupBy = {
  __typename?: 'IntegrationDataOnProtosGroupBy';
  _avg?: Maybe<IntegrationDataOnProtosAvgAggregate>;
  _count?: Maybe<IntegrationDataOnProtosCountAggregate>;
  _max?: Maybe<IntegrationDataOnProtosMaxAggregate>;
  _min?: Maybe<IntegrationDataOnProtosMinAggregate>;
  _sum?: Maybe<IntegrationDataOnProtosSumAggregate>;
  assignedAt: Scalars['DateTime'];
  integrationDataId: Scalars['Int'];
  protoId: Scalars['Int'];
};

export type IntegrationDataOnProtosListRelationFilter = {
  every?: InputMaybe<IntegrationDataOnProtosWhereInput>;
  none?: InputMaybe<IntegrationDataOnProtosWhereInput>;
  some?: InputMaybe<IntegrationDataOnProtosWhereInput>;
};

export type IntegrationDataOnProtosMaxAggregate = {
  __typename?: 'IntegrationDataOnProtosMaxAggregate';
  assignedAt?: Maybe<Scalars['DateTime']>;
  integrationDataId?: Maybe<Scalars['Int']>;
  protoId?: Maybe<Scalars['Int']>;
};

export type IntegrationDataOnProtosMaxOrderByAggregateInput = {
  assignedAt?: InputMaybe<SortOrder>;
  integrationDataId?: InputMaybe<SortOrder>;
  protoId?: InputMaybe<SortOrder>;
};

export type IntegrationDataOnProtosMinAggregate = {
  __typename?: 'IntegrationDataOnProtosMinAggregate';
  assignedAt?: Maybe<Scalars['DateTime']>;
  integrationDataId?: Maybe<Scalars['Int']>;
  protoId?: Maybe<Scalars['Int']>;
};

export type IntegrationDataOnProtosMinOrderByAggregateInput = {
  assignedAt?: InputMaybe<SortOrder>;
  integrationDataId?: InputMaybe<SortOrder>;
  protoId?: InputMaybe<SortOrder>;
};

export type IntegrationDataOnProtosOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IntegrationDataOnProtosOrderByWithAggregationInput = {
  _avg?: InputMaybe<IntegrationDataOnProtosAvgOrderByAggregateInput>;
  _count?: InputMaybe<IntegrationDataOnProtosCountOrderByAggregateInput>;
  _max?: InputMaybe<IntegrationDataOnProtosMaxOrderByAggregateInput>;
  _min?: InputMaybe<IntegrationDataOnProtosMinOrderByAggregateInput>;
  _sum?: InputMaybe<IntegrationDataOnProtosSumOrderByAggregateInput>;
  assignedAt?: InputMaybe<SortOrder>;
  integrationDataId?: InputMaybe<SortOrder>;
  protoId?: InputMaybe<SortOrder>;
};

export type IntegrationDataOnProtosOrderByWithRelationInput = {
  assignedAt?: InputMaybe<SortOrder>;
  integrationData?: InputMaybe<IntegrationDataOrderByWithRelationInput>;
  integrationDataId?: InputMaybe<SortOrder>;
  proto?: InputMaybe<ProtoOrderByWithRelationInput>;
  protoId?: InputMaybe<SortOrder>;
};

export type IntegrationDataOnProtosProtoIdIntegrationDataIdCompoundUniqueInput = {
  integrationDataId: Scalars['Int'];
  protoId: Scalars['Int'];
};

export enum IntegrationDataOnProtosScalarFieldEnum {
  AssignedAt = 'assignedAt',
  IntegrationDataId = 'integrationDataId',
  ProtoId = 'protoId'
}

export type IntegrationDataOnProtosScalarWhereInput = {
  AND?: InputMaybe<Array<IntegrationDataOnProtosScalarWhereInput>>;
  NOT?: InputMaybe<Array<IntegrationDataOnProtosScalarWhereInput>>;
  OR?: InputMaybe<Array<IntegrationDataOnProtosScalarWhereInput>>;
  assignedAt?: InputMaybe<DateTimeFilter>;
  integrationDataId?: InputMaybe<IntFilter>;
  protoId?: InputMaybe<IntFilter>;
};

export type IntegrationDataOnProtosScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<IntegrationDataOnProtosScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<IntegrationDataOnProtosScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<IntegrationDataOnProtosScalarWhereWithAggregatesInput>>;
  assignedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  integrationDataId?: InputMaybe<IntWithAggregatesFilter>;
  protoId?: InputMaybe<IntWithAggregatesFilter>;
};

export type IntegrationDataOnProtosSumAggregate = {
  __typename?: 'IntegrationDataOnProtosSumAggregate';
  integrationDataId?: Maybe<Scalars['Int']>;
  protoId?: Maybe<Scalars['Int']>;
};

export type IntegrationDataOnProtosSumOrderByAggregateInput = {
  integrationDataId?: InputMaybe<SortOrder>;
  protoId?: InputMaybe<SortOrder>;
};

export type IntegrationDataOnProtosUpdateInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  integrationData?: InputMaybe<IntegrationDataUpdateOneRequiredWithoutProtosNestedInput>;
  proto?: InputMaybe<ProtoUpdateOneRequiredWithoutIntegrationsNestedInput>;
};

export type IntegrationDataOnProtosUpdateManyMutationInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationDataOnProtosUpdateManyWithWhereWithoutIntegrationDataInput = {
  data: IntegrationDataOnProtosUpdateManyMutationInput;
  where: IntegrationDataOnProtosScalarWhereInput;
};

export type IntegrationDataOnProtosUpdateManyWithWhereWithoutProtoInput = {
  data: IntegrationDataOnProtosUpdateManyMutationInput;
  where: IntegrationDataOnProtosScalarWhereInput;
};

export type IntegrationDataOnProtosUpdateManyWithoutIntegrationDataNestedInput = {
  connect?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput>>;
  create?: InputMaybe<Array<IntegrationDataOnProtosCreateWithoutIntegrationDataInput>>;
  createMany?: InputMaybe<IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope>;
  delete?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IntegrationDataOnProtosScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  set?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  update?: InputMaybe<Array<IntegrationDataOnProtosUpdateWithWhereUniqueWithoutIntegrationDataInput>>;
  updateMany?: InputMaybe<Array<IntegrationDataOnProtosUpdateManyWithWhereWithoutIntegrationDataInput>>;
  upsert?: InputMaybe<Array<IntegrationDataOnProtosUpsertWithWhereUniqueWithoutIntegrationDataInput>>;
};

export type IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput = {
  connect?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IntegrationDataOnProtosCreateOrConnectWithoutProtoInput>>;
  create?: InputMaybe<Array<IntegrationDataOnProtosCreateWithoutProtoInput>>;
  createMany?: InputMaybe<IntegrationDataOnProtosCreateManyProtoInputEnvelope>;
  delete?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IntegrationDataOnProtosScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  set?: InputMaybe<Array<IntegrationDataOnProtosWhereUniqueInput>>;
  update?: InputMaybe<Array<IntegrationDataOnProtosUpdateWithWhereUniqueWithoutProtoInput>>;
  updateMany?: InputMaybe<Array<IntegrationDataOnProtosUpdateManyWithWhereWithoutProtoInput>>;
  upsert?: InputMaybe<Array<IntegrationDataOnProtosUpsertWithWhereUniqueWithoutProtoInput>>;
};

export type IntegrationDataOnProtosUpdateWithWhereUniqueWithoutIntegrationDataInput = {
  data: IntegrationDataOnProtosUpdateWithoutIntegrationDataInput;
  where: IntegrationDataOnProtosWhereUniqueInput;
};

export type IntegrationDataOnProtosUpdateWithWhereUniqueWithoutProtoInput = {
  data: IntegrationDataOnProtosUpdateWithoutProtoInput;
  where: IntegrationDataOnProtosWhereUniqueInput;
};

export type IntegrationDataOnProtosUpdateWithoutIntegrationDataInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  proto?: InputMaybe<ProtoUpdateOneRequiredWithoutIntegrationsNestedInput>;
};

export type IntegrationDataOnProtosUpdateWithoutProtoInput = {
  assignedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  integrationData?: InputMaybe<IntegrationDataUpdateOneRequiredWithoutProtosNestedInput>;
};

export type IntegrationDataOnProtosUpsertWithWhereUniqueWithoutIntegrationDataInput = {
  create: IntegrationDataOnProtosCreateWithoutIntegrationDataInput;
  update: IntegrationDataOnProtosUpdateWithoutIntegrationDataInput;
  where: IntegrationDataOnProtosWhereUniqueInput;
};

export type IntegrationDataOnProtosUpsertWithWhereUniqueWithoutProtoInput = {
  create: IntegrationDataOnProtosCreateWithoutProtoInput;
  update: IntegrationDataOnProtosUpdateWithoutProtoInput;
  where: IntegrationDataOnProtosWhereUniqueInput;
};

export type IntegrationDataOnProtosWhereInput = {
  AND?: InputMaybe<Array<IntegrationDataOnProtosWhereInput>>;
  NOT?: InputMaybe<Array<IntegrationDataOnProtosWhereInput>>;
  OR?: InputMaybe<Array<IntegrationDataOnProtosWhereInput>>;
  assignedAt?: InputMaybe<DateTimeFilter>;
  integrationData?: InputMaybe<IntegrationDataRelationFilter>;
  integrationDataId?: InputMaybe<IntFilter>;
  proto?: InputMaybe<ProtoRelationFilter>;
  protoId?: InputMaybe<IntFilter>;
};

export type IntegrationDataOnProtosWhereUniqueInput = {
  protoId_integrationDataId?: InputMaybe<IntegrationDataOnProtosProtoIdIntegrationDataIdCompoundUniqueInput>;
};

export type IntegrationDataOrderByWithAggregationInput = {
  _avg?: InputMaybe<IntegrationDataAvgOrderByAggregateInput>;
  _count?: InputMaybe<IntegrationDataCountOrderByAggregateInput>;
  _max?: InputMaybe<IntegrationDataMaxOrderByAggregateInput>;
  _min?: InputMaybe<IntegrationDataMinOrderByAggregateInput>;
  _sum?: InputMaybe<IntegrationDataSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  search?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationDataOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  protos?: InputMaybe<IntegrationDataOnProtosOrderByRelationAggregateInput>;
  search?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IntegrationDataRelationFilter = {
  is?: InputMaybe<IntegrationDataWhereInput>;
  isNot?: InputMaybe<IntegrationDataWhereInput>;
};

export enum IntegrationDataScalarFieldEnum {
  CreatedAt = 'createdAt',
  Data = 'data',
  ExternalId = 'externalId',
  Id = 'id',
  Search = 'search',
  UpdatedAt = 'updatedAt'
}

export type IntegrationDataScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<IntegrationDataScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<IntegrationDataScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<IntegrationDataScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  data?: InputMaybe<StringWithAggregatesFilter>;
  externalId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  search?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type IntegrationDataSumAggregate = {
  __typename?: 'IntegrationDataSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type IntegrationDataSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type IntegrationDataUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  protos?: InputMaybe<IntegrationDataOnProtosUpdateManyWithoutIntegrationDataNestedInput>;
  search?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationDataUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  search?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationDataUpdateOneRequiredWithoutProtosNestedInput = {
  connect?: InputMaybe<IntegrationDataWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IntegrationDataCreateOrConnectWithoutProtosInput>;
  create?: InputMaybe<IntegrationDataCreateWithoutProtosInput>;
  update?: InputMaybe<IntegrationDataUpdateWithoutProtosInput>;
  upsert?: InputMaybe<IntegrationDataUpsertWithoutProtosInput>;
};

export type IntegrationDataUpdateWithoutProtosInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  search?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationDataUpsertWithoutProtosInput = {
  create: IntegrationDataCreateWithoutProtosInput;
  update: IntegrationDataUpdateWithoutProtosInput;
};

export type IntegrationDataWhereInput = {
  AND?: InputMaybe<Array<IntegrationDataWhereInput>>;
  NOT?: InputMaybe<Array<IntegrationDataWhereInput>>;
  OR?: InputMaybe<Array<IntegrationDataWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<StringFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  protos?: InputMaybe<IntegrationDataOnProtosListRelationFilter>;
  search?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntegrationDataWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
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
  user?: InputMaybe<UserUpdateOneRequiredWithoutIntegrationsNestedInput>;
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

export type IntegrationUpdateManyWithoutUserNestedInput = {
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
  createManyIntegration: AffectedRowsOutput;
  createManyIntegrationData: AffectedRowsOutput;
  createManyIntegrationDataOnProtos: AffectedRowsOutput;
  createManyProto: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneIntegration: Integration;
  createOneIntegrationData: IntegrationData;
  createOneIntegrationDataOnProtos: IntegrationDataOnProtos;
  createOneProto: Proto;
  createOneUser: User;
  deleteManyIntegration: AffectedRowsOutput;
  deleteManyIntegrationData: AffectedRowsOutput;
  deleteManyIntegrationDataOnProtos: AffectedRowsOutput;
  deleteManyProto: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneIntegration?: Maybe<Integration>;
  deleteOneIntegrationData?: Maybe<IntegrationData>;
  deleteOneIntegrationDataOnProtos?: Maybe<IntegrationDataOnProtos>;
  deleteOneProto?: Maybe<Proto>;
  deleteOneUser?: Maybe<User>;
  getPlaybackState?: Maybe<GetPlaybackStateResponse>;
  refreshSpotifyAccessToken: SpotifyResponse;
  registerIntegration: IntegrationsResponse;
  saveRecentlyPlayedTracks?: Maybe<SpotifyResponse>;
  swapSpotifyCode: SpotifyResponse;
  updateManyIntegration: AffectedRowsOutput;
  updateManyIntegrationData: AffectedRowsOutput;
  updateManyIntegrationDataOnProtos: AffectedRowsOutput;
  updateManyProto: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneIntegration?: Maybe<Integration>;
  updateOneIntegrationData?: Maybe<IntegrationData>;
  updateOneIntegrationDataOnProtos?: Maybe<IntegrationDataOnProtos>;
  updateOneProto?: Maybe<Proto>;
  updateOneUser?: Maybe<User>;
  upsertOneIntegration: Integration;
  upsertOneIntegrationData: IntegrationData;
  upsertOneIntegrationDataOnProtos: IntegrationDataOnProtos;
  upsertOneProto: Proto;
  upsertOneUser: User;
};


export type MutationAuthenticateArgs = {
  input: AuthInput;
};


export type MutationCreateManyIntegrationArgs = {
  data: Array<IntegrationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyIntegrationDataArgs = {
  data: Array<IntegrationDataCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyIntegrationDataOnProtosArgs = {
  data: Array<IntegrationDataOnProtosCreateManyInput>;
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


export type MutationCreateOneIntegrationArgs = {
  data: IntegrationCreateInput;
};


export type MutationCreateOneIntegrationDataArgs = {
  data: IntegrationDataCreateInput;
};


export type MutationCreateOneIntegrationDataOnProtosArgs = {
  data: IntegrationDataOnProtosCreateInput;
};


export type MutationCreateOneProtoArgs = {
  data: ProtoCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyIntegrationArgs = {
  where?: InputMaybe<IntegrationWhereInput>;
};


export type MutationDeleteManyIntegrationDataArgs = {
  where?: InputMaybe<IntegrationDataWhereInput>;
};


export type MutationDeleteManyIntegrationDataOnProtosArgs = {
  where?: InputMaybe<IntegrationDataOnProtosWhereInput>;
};


export type MutationDeleteManyProtoArgs = {
  where?: InputMaybe<ProtoWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneIntegrationArgs = {
  where: IntegrationWhereUniqueInput;
};


export type MutationDeleteOneIntegrationDataArgs = {
  where: IntegrationDataWhereUniqueInput;
};


export type MutationDeleteOneIntegrationDataOnProtosArgs = {
  where: IntegrationDataOnProtosWhereUniqueInput;
};


export type MutationDeleteOneProtoArgs = {
  where: ProtoWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationGetPlaybackStateArgs = {
  input: SpotifyInput;
};


export type MutationRefreshSpotifyAccessTokenArgs = {
  input: SpotifyInput;
};


export type MutationRegisterIntegrationArgs = {
  input: IntegrationsInput;
};


export type MutationSaveRecentlyPlayedTracksArgs = {
  input: SpotifyInput;
};


export type MutationSwapSpotifyCodeArgs = {
  input: SpotifyInput;
};


export type MutationUpdateManyIntegrationArgs = {
  data: IntegrationUpdateManyMutationInput;
  where?: InputMaybe<IntegrationWhereInput>;
};


export type MutationUpdateManyIntegrationDataArgs = {
  data: IntegrationDataUpdateManyMutationInput;
  where?: InputMaybe<IntegrationDataWhereInput>;
};


export type MutationUpdateManyIntegrationDataOnProtosArgs = {
  data: IntegrationDataOnProtosUpdateManyMutationInput;
  where?: InputMaybe<IntegrationDataOnProtosWhereInput>;
};


export type MutationUpdateManyProtoArgs = {
  data: ProtoUpdateManyMutationInput;
  where?: InputMaybe<ProtoWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneIntegrationArgs = {
  data: IntegrationUpdateInput;
  where: IntegrationWhereUniqueInput;
};


export type MutationUpdateOneIntegrationDataArgs = {
  data: IntegrationDataUpdateInput;
  where: IntegrationDataWhereUniqueInput;
};


export type MutationUpdateOneIntegrationDataOnProtosArgs = {
  data: IntegrationDataOnProtosUpdateInput;
  where: IntegrationDataOnProtosWhereUniqueInput;
};


export type MutationUpdateOneProtoArgs = {
  data: ProtoUpdateInput;
  where: ProtoWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneIntegrationArgs = {
  create: IntegrationCreateInput;
  update: IntegrationUpdateInput;
  where: IntegrationWhereUniqueInput;
};


export type MutationUpsertOneIntegrationDataArgs = {
  create: IntegrationDataCreateInput;
  update: IntegrationDataUpdateInput;
  where: IntegrationDataWhereUniqueInput;
};


export type MutationUpsertOneIntegrationDataOnProtosArgs = {
  create: IntegrationDataOnProtosCreateInput;
  update: IntegrationDataOnProtosUpdateInput;
  where: IntegrationDataOnProtosWhereUniqueInput;
};


export type MutationUpsertOneProtoArgs = {
  create: ProtoCreateInput;
  update: ProtoUpdateInput;
  where: ProtoWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
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

export type NestedEnumAuthProviderFilter = {
  equals?: InputMaybe<AuthProvider>;
  in?: InputMaybe<Array<AuthProvider>>;
  not?: InputMaybe<NestedEnumAuthProviderFilter>;
  notIn?: InputMaybe<Array<AuthProvider>>;
};

export type NestedEnumAuthProviderWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAuthProviderFilter>;
  _min?: InputMaybe<NestedEnumAuthProviderFilter>;
  equals?: InputMaybe<AuthProvider>;
  in?: InputMaybe<Array<AuthProvider>>;
  not?: InputMaybe<NestedEnumAuthProviderWithAggregatesFilter>;
  notIn?: InputMaybe<Array<AuthProvider>>;
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
  _count?: Maybe<ProtoCount>;
  createdAt: Scalars['DateTime'];
  dateString?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  integrations: Array<IntegrationDataOnProtos>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};


export type ProtoIntegrationsArgs = {
  cursor?: InputMaybe<IntegrationDataOnProtosWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationDataOnProtosScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationDataOnProtosOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataOnProtosWhereInput>;
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

export type ProtoCount = {
  __typename?: 'ProtoCount';
  integrations: Scalars['Int'];
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
  integrations?: InputMaybe<IntegrationDataOnProtosCreateNestedManyWithoutProtoInput>;
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

export type ProtoCreateNestedOneWithoutIntegrationsInput = {
  connect?: InputMaybe<ProtoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProtoCreateOrConnectWithoutIntegrationsInput>;
  create?: InputMaybe<ProtoCreateWithoutIntegrationsInput>;
};

export type ProtoCreateOrConnectWithoutIntegrationsInput = {
  create: ProtoCreateWithoutIntegrationsInput;
  where: ProtoWhereUniqueInput;
};

export type ProtoCreateOrConnectWithoutUserInput = {
  create: ProtoCreateWithoutUserInput;
  where: ProtoWhereUniqueInput;
};

export type ProtoCreateWithoutIntegrationsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateString?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProtosInput;
};

export type ProtoCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateString?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  integrations?: InputMaybe<IntegrationDataOnProtosCreateNestedManyWithoutProtoInput>;
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
  integrations?: InputMaybe<IntegrationDataOnProtosOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ProtoRelationFilter = {
  is?: InputMaybe<ProtoWhereInput>;
  isNot?: InputMaybe<ProtoWhereInput>;
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
  integrations?: InputMaybe<IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProtosNestedInput>;
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

export type ProtoUpdateManyWithoutUserNestedInput = {
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

export type ProtoUpdateOneRequiredWithoutIntegrationsNestedInput = {
  connect?: InputMaybe<ProtoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProtoCreateOrConnectWithoutIntegrationsInput>;
  create?: InputMaybe<ProtoCreateWithoutIntegrationsInput>;
  update?: InputMaybe<ProtoUpdateWithoutIntegrationsInput>;
  upsert?: InputMaybe<ProtoUpsertWithoutIntegrationsInput>;
};

export type ProtoUpdateWithWhereUniqueWithoutUserInput = {
  data: ProtoUpdateWithoutUserInput;
  where: ProtoWhereUniqueInput;
};

export type ProtoUpdateWithoutIntegrationsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateString?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProtosNestedInput>;
};

export type ProtoUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateString?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  integrations?: InputMaybe<IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProtoUpsertWithWhereUniqueWithoutUserInput = {
  create: ProtoCreateWithoutUserInput;
  update: ProtoUpdateWithoutUserInput;
  where: ProtoWhereUniqueInput;
};

export type ProtoUpsertWithoutIntegrationsInput = {
  create: ProtoCreateWithoutIntegrationsInput;
  update: ProtoUpdateWithoutIntegrationsInput;
};

export type ProtoWhereInput = {
  AND?: InputMaybe<Array<ProtoWhereInput>>;
  NOT?: InputMaybe<Array<ProtoWhereInput>>;
  OR?: InputMaybe<Array<ProtoWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateString?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  integrations?: InputMaybe<IntegrationDataOnProtosListRelationFilter>;
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
  aggregateIntegrationData: AggregateIntegrationData;
  aggregateIntegrationDataOnProtos: AggregateIntegrationDataOnProtos;
  aggregateProto: AggregateProto;
  aggregateUser: AggregateUser;
  findFirstIntegration?: Maybe<Integration>;
  findFirstIntegrationData?: Maybe<IntegrationData>;
  findFirstIntegrationDataOnProtos?: Maybe<IntegrationDataOnProtos>;
  findFirstIntegrationDataOnProtosOrThrow?: Maybe<IntegrationDataOnProtos>;
  findFirstIntegrationDataOrThrow?: Maybe<IntegrationData>;
  findFirstIntegrationOrThrow?: Maybe<Integration>;
  findFirstProto?: Maybe<Proto>;
  findFirstProtoOrThrow?: Maybe<Proto>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findManyIntegrationData: Array<IntegrationData>;
  findManyIntegrationDataOnProtos: Array<IntegrationDataOnProtos>;
  findUniqueIntegrationData?: Maybe<IntegrationData>;
  findUniqueIntegrationDataOnProtos?: Maybe<IntegrationDataOnProtos>;
  findUniqueIntegrationDataOnProtosOrThrow?: Maybe<IntegrationDataOnProtos>;
  findUniqueIntegrationDataOrThrow?: Maybe<IntegrationData>;
  getIntegration?: Maybe<Integration>;
  getMemoByDateString?: Maybe<Proto>;
  getProto?: Maybe<Proto>;
  getUser?: Maybe<User>;
  groupByIntegration: Array<IntegrationGroupBy>;
  groupByIntegrationData: Array<IntegrationDataGroupBy>;
  groupByIntegrationDataOnProtos: Array<IntegrationDataOnProtosGroupBy>;
  groupByProto: Array<ProtoGroupBy>;
  groupByUser: Array<UserGroupBy>;
  integration?: Maybe<Integration>;
  integrations: Array<Integration>;
  proto?: Maybe<Proto>;
  protos: Array<Proto>;
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


export type QueryAggregateIntegrationDataArgs = {
  cursor?: InputMaybe<IntegrationDataWhereUniqueInput>;
  orderBy?: InputMaybe<Array<IntegrationDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataWhereInput>;
};


export type QueryAggregateIntegrationDataOnProtosArgs = {
  cursor?: InputMaybe<IntegrationDataOnProtosWhereUniqueInput>;
  orderBy?: InputMaybe<Array<IntegrationDataOnProtosOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataOnProtosWhereInput>;
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


export type QueryFindFirstIntegrationDataArgs = {
  cursor?: InputMaybe<IntegrationDataWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationDataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataWhereInput>;
};


export type QueryFindFirstIntegrationDataOnProtosArgs = {
  cursor?: InputMaybe<IntegrationDataOnProtosWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationDataOnProtosScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationDataOnProtosOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataOnProtosWhereInput>;
};


export type QueryFindFirstIntegrationDataOnProtosOrThrowArgs = {
  cursor?: InputMaybe<IntegrationDataOnProtosWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationDataOnProtosScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationDataOnProtosOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataOnProtosWhereInput>;
};


export type QueryFindFirstIntegrationDataOrThrowArgs = {
  cursor?: InputMaybe<IntegrationDataWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationDataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataWhereInput>;
};


export type QueryFindFirstIntegrationOrThrowArgs = {
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


export type QueryFindFirstProtoOrThrowArgs = {
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


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyIntegrationDataArgs = {
  cursor?: InputMaybe<IntegrationDataWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationDataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataWhereInput>;
};


export type QueryFindManyIntegrationDataOnProtosArgs = {
  cursor?: InputMaybe<IntegrationDataOnProtosWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationDataOnProtosScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationDataOnProtosOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataOnProtosWhereInput>;
};


export type QueryFindUniqueIntegrationDataArgs = {
  where: IntegrationDataWhereUniqueInput;
};


export type QueryFindUniqueIntegrationDataOnProtosArgs = {
  where: IntegrationDataOnProtosWhereUniqueInput;
};


export type QueryFindUniqueIntegrationDataOnProtosOrThrowArgs = {
  where: IntegrationDataOnProtosWhereUniqueInput;
};


export type QueryFindUniqueIntegrationDataOrThrowArgs = {
  where: IntegrationDataWhereUniqueInput;
};


export type QueryGetIntegrationArgs = {
  where: IntegrationWhereUniqueInput;
};


export type QueryGetMemoByDateStringArgs = {
  dateString: Scalars['String'];
};


export type QueryGetProtoArgs = {
  where: ProtoWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByIntegrationArgs = {
  by: Array<IntegrationScalarFieldEnum>;
  having?: InputMaybe<IntegrationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IntegrationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationWhereInput>;
};


export type QueryGroupByIntegrationDataArgs = {
  by: Array<IntegrationDataScalarFieldEnum>;
  having?: InputMaybe<IntegrationDataScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IntegrationDataOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataWhereInput>;
};


export type QueryGroupByIntegrationDataOnProtosArgs = {
  by: Array<IntegrationDataOnProtosScalarFieldEnum>;
  having?: InputMaybe<IntegrationDataOnProtosScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IntegrationDataOnProtosOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationDataOnProtosWhereInput>;
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
  accessToken?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  dateString?: InputMaybe<Scalars['String']>;
  redirectUri?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type SpotifyItem = {
  __typename?: 'SpotifyItem';
  album: Album;
  external_urls: ExternalUrLs;
  id: Scalars['String'];
  name: Scalars['String'];
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
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  protos: Array<Proto>;
  provider: AuthProvider;
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
  provider: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  integrations?: InputMaybe<IntegrationCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  protos?: InputMaybe<ProtoCreateNestedManyWithoutUserInput>;
  provider: AuthProvider;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  provider: AuthProvider;
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
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  protos?: InputMaybe<ProtoCreateNestedManyWithoutUserInput>;
  provider: AuthProvider;
};

export type UserCreateWithoutProtosInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  integrations?: InputMaybe<IntegrationCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  provider: AuthProvider;
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
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  provider: AuthProvider;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  provider?: Maybe<AuthProvider>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  provider?: Maybe<AuthProvider>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
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
  provider?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  integrations?: InputMaybe<IntegrationOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  protos?: InputMaybe<ProtoOrderByRelationAggregateInput>;
  provider?: InputMaybe<SortOrder>;
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
  Picture = 'picture',
  Provider = 'provider'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  picture?: InputMaybe<StringNullableWithAggregatesFilter>;
  provider?: InputMaybe<EnumAuthProviderWithAggregatesFilter>;
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
  integrations?: InputMaybe<IntegrationUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  protos?: InputMaybe<ProtoUpdateManyWithoutUserNestedInput>;
  provider?: InputMaybe<EnumAuthProviderFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<EnumAuthProviderFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutIntegrationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutIntegrationsInput>;
  create?: InputMaybe<UserCreateWithoutIntegrationsInput>;
  update?: InputMaybe<UserUpdateWithoutIntegrationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutIntegrationsInput>;
};

export type UserUpdateOneRequiredWithoutProtosNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProtosInput>;
  create?: InputMaybe<UserCreateWithoutProtosInput>;
  update?: InputMaybe<UserUpdateWithoutProtosInput>;
  upsert?: InputMaybe<UserUpsertWithoutProtosInput>;
};

export type UserUpdateWithoutIntegrationsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  protos?: InputMaybe<ProtoUpdateManyWithoutUserNestedInput>;
  provider?: InputMaybe<EnumAuthProviderFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProtosInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  integrations?: InputMaybe<IntegrationUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<EnumAuthProviderFieldUpdateOperationsInput>;
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
  name?: InputMaybe<StringNullableFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  protos?: InputMaybe<ProtoListRelationFilter>;
  provider?: InputMaybe<EnumAuthProviderFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type AuthenticateMutationVariables = Exact<{
  input: AuthInput;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthResponse', status: string, access_token: string, user: { __typename?: 'User', id: number, email: string, name?: string | null, picture?: string | null, provider: AuthProvider } } };

export type CreateProtoMutationMutationVariables = Exact<{
  data: ProtoCreateInput;
}>;


export type CreateProtoMutationMutation = { __typename?: 'Mutation', createOneProto: { __typename?: 'Proto', id: number, title?: string | null } };

export type RegisterIntegrationMutationVariables = Exact<{
  input: IntegrationsInput;
}>;


export type RegisterIntegrationMutation = { __typename?: 'Mutation', registerIntegration: { __typename?: 'IntegrationsResponse', integration: { __typename?: 'Integration', id: number, externalId: string, createdAt: any, updatedAt: any } } };

export type SaveRecentlyPlayedTracksMutationVariables = Exact<{
  input: SpotifyInput;
}>;


export type SaveRecentlyPlayedTracksMutation = { __typename?: 'Mutation', saveRecentlyPlayedTracks?: { __typename?: 'SpotifyResponse', accessToken: string } | null };

export type UpdateProtoMutationMutationVariables = Exact<{
  data: ProtoUpdateInput;
  where: ProtoWhereUniqueInput;
}>;


export type UpdateProtoMutationMutation = { __typename?: 'Mutation', updateOneProto?: { __typename?: 'Proto', id: number, title?: string | null, description?: string | null, dateString?: string | null, createdAt: any, updatedAt: any, userId: number } | null };

export type GetMemoByDateStringQueryVariables = Exact<{
  dateString: Scalars['String'];
}>;


export type GetMemoByDateStringQuery = { __typename?: 'Query', getMemoByDateString?: { __typename?: 'Proto', id: number, title?: string | null, description?: string | null, dateString?: string | null, createdAt: any, updatedAt: any } | null };

export type GetIntegrationDataQueryVariables = Exact<{
  where?: InputMaybe<IntegrationDataWhereInput>;
}>;


export type GetIntegrationDataQuery = { __typename?: 'Query', findManyIntegrationData: Array<{ __typename?: 'IntegrationData', id: number, data: string }> };

export type IntegrationsQueryVariables = Exact<{
  where?: InputMaybe<IntegrationWhereInput>;
}>;


export type IntegrationsQuery = { __typename?: 'Query', integrations: Array<{ __typename?: 'Integration', id: number, externalId: string, provider?: IntegrationProvider | null, status?: IntegrationStatus | null }> };

export type ProtosQueryVariables = Exact<{
  where?: InputMaybe<ProtoWhereInput>;
  integrationsTake?: InputMaybe<Scalars['Int']>;
}>;


export type ProtosQuery = { __typename?: 'Query', protos: Array<{ __typename?: 'Proto', id: number, title?: string | null, description?: string | null, dateString?: string | null, createdAt: any, updatedAt: any, integrations: Array<{ __typename?: 'IntegrationDataOnProtos', integrationData: { __typename?: 'IntegrationData', id: number, data: string } }>, _count?: { __typename?: 'ProtoCount', integrations: number } | null }> };

export type SwapSpotifyCodeMutationVariables = Exact<{
  input: SpotifyInput;
}>;


export type SwapSpotifyCodeMutation = { __typename?: 'Mutation', swapSpotifyCode: { __typename?: 'SpotifyResponse', accessToken: string, refreshToken?: string | null } };

export type RefreshSpotifyAccessTokenMutationVariables = Exact<{
  input: SpotifyInput;
}>;


export type RefreshSpotifyAccessTokenMutation = { __typename?: 'Mutation', refreshSpotifyAccessToken: { __typename?: 'SpotifyResponse', accessToken: string } };


export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const CreateProtoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProtoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProtoCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneProto"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateProtoMutationMutation, CreateProtoMutationMutationVariables>;
export const RegisterIntegrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterIntegration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IntegrationsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerIntegration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterIntegrationMutation, RegisterIntegrationMutationVariables>;
export const SaveRecentlyPlayedTracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveRecentlyPlayedTracks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SpotifyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveRecentlyPlayedTracks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<SaveRecentlyPlayedTracksMutation, SaveRecentlyPlayedTracksMutationVariables>;
export const UpdateProtoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProtoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProtoUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProtoWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneProto"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateString"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<UpdateProtoMutationMutation, UpdateProtoMutationMutationVariables>;
export const GetMemoByDateStringDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMemoByDateString"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMemoByDateString"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateString"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateString"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetMemoByDateStringQuery, GetMemoByDateStringQueryVariables>;
export const GetIntegrationDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIntegrationData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntegrationDataWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyIntegrationData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<GetIntegrationDataQuery, GetIntegrationDataQueryVariables>;
export const IntegrationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Integrations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntegrationWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<IntegrationsQuery, IntegrationsQueryVariables>;
export const ProtosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Protos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProtoWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"integrationsTake"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"protos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateString"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"integrations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"integrationsTake"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrationData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrations"}}]}}]}}]}}]} as unknown as DocumentNode<ProtosQuery, ProtosQueryVariables>;
export const SwapSpotifyCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SwapSpotifyCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SpotifyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"swapSpotifyCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<SwapSpotifyCodeMutation, SwapSpotifyCodeMutationVariables>;
export const RefreshSpotifyAccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshSpotifyAccessToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SpotifyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshSpotifyAccessToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RefreshSpotifyAccessTokenMutation, RefreshSpotifyAccessTokenMutationVariables>;