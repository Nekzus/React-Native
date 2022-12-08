import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { groupReducer, teamReducer } from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  group: groupReducer,
  team: teamReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
