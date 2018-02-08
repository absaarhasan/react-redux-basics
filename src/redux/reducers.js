import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import  planetInfo from './planetReducer'

export default combineReducers({
    routing: routerReducer,
    planetInfo

})