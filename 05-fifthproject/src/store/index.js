import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { groupReducer, teamReducer } from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  group: groupReducer,
  team: teamReducer,
});

//TODO: Desarrollo
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
