import reducerProfile from "./reducers/reducerProfile";
import {applyMiddleware, createStore} from "redux";
import reduxThunk from "redux-thunk";

const Store = createStore(reducerProfile , applyMiddleware(reduxThunk));
export default Store;