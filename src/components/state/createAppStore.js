import {createStore , applyMiddleware} from 'redux'
import  appReducers  from './reducers/reducersIndex'
// import thunk from 'redux-thunk'
import  thunkMiddleware from 'redux-thunk';

// import promiseMiddleware from 'redux-promise-middleware'
import { createPromise } from 'redux-promise-middleware';
const promise = createPromise({ types: { fulfilled: 'success' } });
applyMiddleware(promise);




 const createAppStore = ()=> {

    const store = createStore(appReducers,applyMiddleware(thunkMiddleware, promise))
    console.log(store.getState())
    return store
}
export default createAppStore