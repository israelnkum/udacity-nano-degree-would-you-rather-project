import { createStore } from 'redux'
import rootReducer from '../reducers'
import middleware from '../middlewares'
import { composeWithDevTools } from 'redux-devtools-extension'

const Store = createStore(
    rootReducer,
    {},
    composeWithDevTools(middleware)
)
window.store = Store

export default Store
