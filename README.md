There’s a lineup.
You select players for lineups, we won’t model the ‘user’ at this point though.
* Players have positions and values
* Lineups have to be within a budget, and have to be in a 4-3-3 formation, so 1 GK, 4 Defenders, 3 Mid, 3 Strikers
* can’t select same player twice

# Models

## Lineup (Entity)
  * Unique Id
  * has many Players
  * Budget: Number
  * Spent: Number

## Player (Entity)
  * Unique id: String
  * Name: String
  * Price: number
  * position: Position

## Position (Value Object)
  * Name: String
  * Label: String

## SelectPlayer (Service)
  * (Player, Lineup)
  * Check for uniqueness
  * Check budget
  * check position


## Player Repository
  find by: price, position

## Lineup Repository
  find by id
