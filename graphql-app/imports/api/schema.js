/* just insists on price being a positive float to 1DP, probably a value object? */

export const typeDefs = [`
enum Position {
  GK
  DF
  MD
  FW
}

scalar price

type Account {
  id: String!
  lineup: Lineup!
  budgetRemaining: Float
}

type Formation {
  GK: Int
  DF: Int
  MD: Int
  FW: Int
}

type Player {
  id: String!
  name: String
  price: price!
  position: Position!
}

type Lineup {
  players: [Player]
  targetFormation: Formation!
  currentFormation: Formation!
}

type Query {
  playersByPosition(position: Position!): [Player]
  playersByPrice(min: price! max: price!): [Player]
  player(id: String!): Player

  account(id: String!): Account
  accounts: [Account]
}

type Mutation {
  addPlayerToLineup(
    playerId: String!
    accountId: String!
  ): Lineup

  createPlayer(
    name: String
    price: price!
    position: Position!
  ): Player


  _insertAccount(
    id: String!
    budgetRemaining: Float
  ): Account

  createAccount: Account
}

schema {
  query: Query
  mutation: Mutation
}
`];

