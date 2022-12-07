import { combineReducers, createStore } from 'redux';
import { groupReducer, teamReducer } from './reducers';

const rootReducer = combineReducers({
  group: groupReducer,
  team: teamReducer,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
