import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
//import { ping } from "./enhancers/ping"; // <-- подключаем наш enhancer

export const store = createStore(rootReducer, applyMiddleware(thunk, logger)); // <-- добавляем его в цепочку middleware'ов
