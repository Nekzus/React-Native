import { firstRound } from '../../constants/db/firstRound';
import { groupTypes } from '../types';

const { SELECT_GROUP, APP_READY } = groupTypes;

export const selectGroup = (letter) => ({
  type: SELECT_GROUP,
  letter,
});

export const appReady = () => {
  return async (dispatch) => {
    try {
      const appReady = firstRound.length === 0 ? false : true;
      dispatch({ type: APP_READY, appReady });
    } catch (error) {
      console.log(error);
    }
  };
};
