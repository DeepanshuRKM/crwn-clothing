import { createSelector } from 'reselect';

const selectGame = state => state.game;

export const selectGameData = createSelector(
  [selectGame],
  game => game
);
