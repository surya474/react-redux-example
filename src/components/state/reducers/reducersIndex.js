

import {combineReducers} from 'redux'
 import {loginReducer} from './loginReducer'
import saveTodoReducer  from './todoReducer'

const appReducers = combineReducers( {loginState: loginReducer,saveTodoState:saveTodoReducer})

export { appReducers as default}