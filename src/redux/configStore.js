import { combineReducers, createStore } from "redux";
import { BaiTapDatVeReducer } from "./reducer/BaiTapDatVeReducer";
import { gameOanTuXiReducer } from "./reducer/gameOanTuXiReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  gameOanTuXiReducer: gameOanTuXiReducer,
  BaiTapDatVeReducer: BaiTapDatVeReducer,
  //
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
