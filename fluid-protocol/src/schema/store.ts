
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { String, Int, BigInt, Float, ID, Bytes, Timestamp, Boolean } from '@sentio/sdk/store'
import { Entity, Required, One, Many, Column, ListColumn, AbstractEntity } from '@sentio/sdk/store'
import { BigDecimal } from '@sentio/bigdecimal'
import { DatabaseSchema } from '@sentio/sdk'






@Entity("UserTrove")
export class UserTrove extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("String")
	address: String

	@Required
	@Column("String")
	assetId: String

	@Required
	@Column("Int")
	timestamp: Int

	@Required
	@Column("BigDecimal")
	total_collateral: BigDecimal

	@Required
	@Column("BigDecimal")
	total_collateral_USD: BigDecimal

	@Required
	@Column("BigDecimal")
	total_debt: BigDecimal
  constructor(data: Partial<UserTrove>) {super()}
}

@Entity("Pool")
export class Pool extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	timestamp: Int

	@Required
	@Column("Int")
	creation_block_number: Int

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	underlying_token_address: String

	@Required
	@Column("String")
	underlying_token_symbol: String

	@Required
	@Column("String")
	receipt_token_address: String

	@Required
	@Column("String")
	receipt_token_symbol: String

	@Required
	@Column("String")
	pool_address: String

	@Required
	@Column("String")
	pool_type: String
  constructor(data: Partial<Pool>) {super()}
}

@Entity("PositionSnapshot")
export class PositionSnapshot extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	timestamp: Int

	@Required
	@Column("String")
	blockDate: String

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	poolAddress: String

	@Required
	@Column("String")
	underlyingTokenAddress: String

	@Required
	@Column("String")
	underlyingTokenSymbol: String

	@Required
	@Column("String")
	userAddress: String

	@Required
	@Column("BigDecimal")
	suppliedAmount: BigDecimal

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigDecimal")
	borrowed_amount: BigDecimal

	@Required
	@Column("BigDecimal")
	borrowed_amount_usd: BigDecimal

	@Required
	@Column("BigDecimal")
	collateralAmount: BigDecimal

	@Column("BigDecimal")
	collateralAmountUsd?: BigDecimal
  constructor(data: Partial<PositionSnapshot>) {super()}
}

@Entity("PoolSnapshot")
export class PoolSnapshot extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("Int")
	timestamp: Int

	@Required
	@Column("String")
	blockDate: String

	@Required
	@Column("Int")
	chainId: Int

	@Required
	@Column("String")
	poolAddress: String

	@Required
	@Column("String")
	underlyingTokenAddress: String

	@Required
	@Column("String")
	underlyingTokenSymbol: String

	@Column("BigDecimal")
	underlyingTokenPriceUsd?: BigDecimal

	@Required
	@Column("BigDecimal")
	availableAmount: BigDecimal

	@Column("BigDecimal")
	availableAmountUsd?: BigDecimal

	@Required
	@Column("BigDecimal")
	suppliedAmount: BigDecimal

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigDecimal")
	collateralAmount: BigDecimal

	@Column("BigDecimal")
	collateralAmountUsd?: BigDecimal

	@Required
	@Column("BigDecimal")
	collateralFactor: BigDecimal

	@Required
	@Column("BigDecimal")
	supplyIndex: BigDecimal

	@Required
	@Column("BigDecimal")
	supplyApr: BigDecimal

	@Required
	@Column("BigDecimal")
	borrowed_amount: BigDecimal

	@Required
	@Column("BigDecimal")
	borrowed_amount_usd: BigDecimal

	@Required
	@Column("BigDecimal")
	borrowIndex: BigDecimal

	@Required
	@Column("BigDecimal")
	borrowApr: BigDecimal

	@Column("BigDecimal")
	totalFeesUsd?: BigDecimal

	@Column("BigDecimal")
	userFeesUsd?: BigDecimal

	@Column("BigDecimal")
	protocolFeesUsd?: BigDecimal
  constructor(data: Partial<PoolSnapshot>) {super()}
}


const source = `#############################
# ASSET STATE ENTITIES #
#############################

# User base asset state
type UserTrove @entity {
    id: ID!
    address: String!
    assetId: String!
    timestamp: Int!
    total_collateral: BigDecimal!
    total_collateral_USD: BigDecimal!
    total_debt: BigDecimal!
}
# pool
type Pool @entity {
    id: ID!
    timestamp: Int!
    creation_block_number: Int!
    chainId: Int!
    underlying_token_address: String!
    underlying_token_symbol: String!
    receipt_token_address: String!
    receipt_token_symbol: String!
    pool_address: String!
    pool_type: String!
}

# positon snapshot
type PositionSnapshot @entity {
    id: ID!
    timestamp: Int!
    blockDate: String!
    chainId: Int!
    poolAddress: String!
    underlyingTokenAddress: String!
    underlyingTokenSymbol: String!
    userAddress: String!
    suppliedAmount: BigDecimal!
    suppliedAmountUsd: BigDecimal
    borrowed_amount: BigDecimal!
    borrowed_amount_usd: BigDecimal!
    collateralAmount: BigDecimal!
    collateralAmountUsd: BigDecimal
}
    
# pool snapshot
type PoolSnapshot @entity {
    id: ID!
    timestamp: Int!
    blockDate: String!
    chainId: Int!
    poolAddress: String!
    underlyingTokenAddress: String!
    underlyingTokenSymbol: String!
    underlyingTokenPriceUsd: BigDecimal
    availableAmount: BigDecimal!
    availableAmountUsd: BigDecimal
    suppliedAmount: BigDecimal!
    suppliedAmountUsd: BigDecimal
    collateralAmount: BigDecimal!
    collateralAmountUsd: BigDecimal
    collateralFactor: BigDecimal!
    supplyIndex: BigDecimal!
    supplyApr: BigDecimal!
    borrowed_amount: BigDecimal!
    borrowed_amount_usd: BigDecimal!
    borrowIndex: BigDecimal!
    borrowApr: BigDecimal!
    totalFeesUsd: BigDecimal
    userFeesUsd: BigDecimal
    protocolFeesUsd: BigDecimal
}`
DatabaseSchema.register({
  source,
  entities: {
    "UserTrove": UserTrove,
		"Pool": Pool,
		"PositionSnapshot": PositionSnapshot,
		"PoolSnapshot": PoolSnapshot
  }
})
