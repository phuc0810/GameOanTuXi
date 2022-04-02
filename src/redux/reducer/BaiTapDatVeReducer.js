import { DAT_GHE, XOA_GHE } from "../type/BaiTapDatVeType";

let stateDefault = {
  gheDangDat: [],
};

export const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let newgheDangDat = [...state.gheDangDat];

      let finIndex = newgheDangDat.findIndex(
        (item) => item.soGhe === action.ghe.soGhe
      );

      if (finIndex !== -1) {
        newgheDangDat.splice(finIndex, 1);
      } else {
        newgheDangDat.push(action.ghe);
      }
      state.gheDangDat = newgheDangDat;

      return { ...state };
    }
    case XOA_GHE: {
      let newgheDangDat = [...state.gheDangDat];

      let finIndex = newgheDangDat.findIndex(
        (item) => item.soGhe === action.soGhe
      );

      newgheDangDat.splice(finIndex, 1);

      state.gheDangDat = newgheDangDat;
      return { ...state };
    }
  }
  return state;
};
