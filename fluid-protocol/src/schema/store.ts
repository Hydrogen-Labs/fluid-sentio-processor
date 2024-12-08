
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
	@Column("BigInt")
	total_collateral: BigInt

	@Required
	@Column("BigDecimal")
	total_collateral_USD: BigDecimal

	@Required
	@Column("BigInt")
	total_debt: BigInt
  constructor(data: Partial<UserTrove>) {super()}
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
	@Column("BigInt")
	suppliedAmount: BigInt

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	borrowedAmount: BigInt

	@Column("BigDecimal")
	borrowedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	collateralAmount: BigInt

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
	@Column("BigInt")
	availableAmount: BigInt

	@Column("BigDecimal")
	availableAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	suppliedAmount: BigInt

	@Column("BigDecimal")
	suppliedAmountUsd?: BigDecimal

	@Required
	@Column("BigInt")
	collateralAmount: BigInt

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
	@Column("BigInt")
	borrowedAmount: BigInt

	@Column("BigDecimal")
	borrowedAmountUsd?: BigDecimal

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
    total_collateral: BigInt!
    total_collateral_USD: BigDecimal!
    total_debt: BigInt!
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
    suppliedAmount: BigInt!
    suppliedAmountUsd: BigDecimal
    borrowedAmount: BigInt!
    borrowedAmountUsd: BigDecimal
    collateralAmount: BigInt!
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
    availableAmount: BigInt!
    availableAmountUsd: BigDecimal
    suppliedAmount: BigInt!
    suppliedAmountUsd: BigDecimal
    collateralAmount: BigInt!
    collateralAmountUsd: BigDecimal
    collateralFactor: BigDecimal!
    supplyIndex: BigDecimal!
    supplyApr: BigDecimal!
    borrowedAmount: BigInt!
    borrowedAmountUsd: BigDecimal
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
		"PositionSnapshot": PositionSnapshot,
		"PoolSnapshot": PoolSnapshot
  }
})
