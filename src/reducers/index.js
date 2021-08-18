import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import questionsReducer from './questionsReducer'

export default combineReducers({
    usersReducer,
    questionsReducer
})
