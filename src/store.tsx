import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './app/reducers/authReducer'; // Create this reducer
import clothReducer from './app/reducers/clothReducer'; // Create this reducer

const rootReducer = combineReducers({
  auth: authReducer,
  cloth: clothReducer,
  // Add more reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;