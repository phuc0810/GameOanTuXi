import { DAT_GHE, XOA_GHE } from "../type/BaiTapDatVeType";

export let datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export let xoaGheAction = (soGhe) => {
  return {
    type: XOA_GHE,
    soGhe,
  };
};
