import {createStore , applyMiddleware} from 'redux'
import  appReducers  from './reducers/reducersIndex'
// import thunk from 'redux-thunk'
import  thunkMiddleware from 'redux-thunk';

// import promiseMiddleware from 'redux-promise-middleware'
//import promise from 'redux-promise-middleware';
// const promise = createPromise({ types: { fulfilled: 'success' } });
import promiseMiddleware from 'redux-promise';
// applyMiddleware(promise);




 const createAppStore = ()=> {

    const store = createStore(appReducers,applyMiddleware(promiseMiddleware))
    console.log(store.getState())
    return store
}
export default createAppStore