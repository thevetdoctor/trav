import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import {IReducer } from '../components/types'

// const store = createStore(reducer, composeWithDevTools(
//     applyMiddleware()));

// export default store;