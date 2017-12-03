import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productPageReducers from './reducers/productPageReducers.js';

export default function (data) {
  const reducers = {
    productPageReducers,
  };
  const rootReducer = combineReducers(reducers);
  const finalCreateStore = applyMiddleware(thunk)(createStore);
  const store = finalCreateStore(rootReducer, data,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}
