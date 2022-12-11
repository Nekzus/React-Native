import { matchTypes } from '../types';
import { reqWorldApi } from '../../api/regWorldCup';

const { GET_MATCHES, NEXT_MATCHES } = matchTypes;

export const getMatches = () => {
  return async (dispatch) => {
    try {
      const resp = await reqWorldApi.get('/matches');
      const matches = resp.data;
      dispatch({ type: GET_MATCHES, matches });
    } catch (error) {
      console.log(error);
    }
  };
};

export const nextMatches = () => {
  return async (dispatch) => {
    try {
      const respTd = await reqWorldApi.get('/matches/today');
      const respTm = await reqWorldApi.get('/matches/tomorrow');
      const today = respTd.data;
      const tomorrow = respTm.data;
      dispatch({ type: NEXT_MATCHES, today, tomorrow });
    } catch (error) {
      console.log(error);
    }
  };
};
