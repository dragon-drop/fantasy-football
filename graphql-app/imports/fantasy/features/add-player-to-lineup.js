import Fantasy from '../Fantasy';
import {
  Scenario,
  xScenario,
  test,
   testForError,
  Feature,
} from '../test';

export default function () {
  Feature('Feature: Add player to lineup', () => {

    xScenario('No players selected', () => {
      // Given I have a lineup
      // And I have not selected any players
      const account = new Fantasy.Account();
      const myLineup = account.lineup;

      // When I select a player
      const player = new Fantasy.Player({
        name: 'John Norris',
        price: 7.5,
        position: 'MD'
      });

      myLineup.addPlayer(player);

      // Then that player is in my lineup
      test('I have 1 player in my lineup', myLineup.players, myLineup.players.length === 1);

      test(`The player has the id ${player.id}`, myLineup.players[0], myLineup.players[0].id === player.id);
    });

    xScenario('No spaces left at position', () => {
      // Given I have a lineup
      // And I have a selected a Goalkeeper already
      const account = new Fantasy.Account();
      const myLineup = account.lineup;

      myLineup.addPlayer(new Fantasy.Player({
        name: 'John Norris',
        price: 5.5,
        position: 'GK'
      }));

      // When I select a Goalkeeper
      const player = new Fantasy.Player({
        name: 'Peter Schmichael',
        price: 4.5,
        position: 'GK'
      });

      myLineup.addPlayer(player);

      // Then that player is not in my lineup
      test('I have 1 player in my lineup', myLineup.players, myLineup.players.length === 1);
      test(`That player's id is not ${player.id}`, myLineup.players, myLineup.players[0] !== player.id);

      // And an error is thrown
    });

    Scenario('Insufficient budget', () => {
      // Given I have an account
      // And I have a lineup
      const account = new Fantasy.Account();
      const myLineup = account.lineup;

      // And I have 5 million left in my budget
      account.budgetRemaining = 5;

      // When I select a 6 million player
      const player = new Fantasy.Player({
        name: 'Wayne Potato',
        price: 9.5,
        position: 'FW'
      });

      // Then that player is not in my lineup
      test('I have 0 players in my lineup', myLineup.players, myLineup.players.length === 0);

      // And an error is thrown
      testForError(Fantasy.Errors.BUDGET, () => {
        account.addPlayerToLineup(player);
      });

    });

    xScenario('Player already selected', () => {
      // Given I have a lineup
      // And I have added a player
      // When I add that player again
      // Then I only have that player once
      // And an error is thrown
    });

  });
}
