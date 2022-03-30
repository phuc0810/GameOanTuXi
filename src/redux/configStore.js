import { combineReducers, createStore } from "redux";
import { gameOanTuXiReducer } from "./reducer/gameOanTuXiReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  gameOanTuXiReducer: gameOanTuXiReducer,
  //
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
