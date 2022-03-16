import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import {productReducer} from "./reducers/product-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    products: productReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)