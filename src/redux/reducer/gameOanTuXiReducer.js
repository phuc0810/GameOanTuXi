let stateDefault = {
  mangOanTuXi: [
    { ma: "keo", img: "./img/gameOanTuXi/keo.png", datCuoc: true },
    { ma: "bao", img: "./img/gameOanTuXi/bao.png", datCuoc: false },
    { ma: "bua", img: "./img/gameOanTuXi/bua.png", datCuoc: false },
  ],
  ketQua: "bạn đã thua",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bua", img: "./img/gameOanTuXi/bao.png" },
};

export const gameOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THAY_DOI_KBB": {
      let newMangOanTuXi = [...state.mangOanTuXi];
      // reset mang cho thuoc tinh datcuoc=false
      newMangOanTuXi = newMangOanTuXi.map((item, i) => {
        if (item.ma === action.ma) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangOanTuXi = newMangOanTuXi;
      return { ...state };
    }
    case "PLAY-GAME": {
      console.log(action);
      let random = Math.floor(Math.random() * 3);
      let quanCuocRandom = state.mangOanTuXi[random];
      state.computer = quanCuocRandom;
      return { ...state };
    }
    case "END_GAME": {
      let player = state.mangOanTuXi.find((item) => {
        return item.datCuoc === true;
      });
      let computer = state.computer.ma;

      switch (player.ma) {
        case "bua":
          {
            if (computer === "bao") {
              state.ketQua = "bạn đã thua";
            } else if (computer === "keo") {
              state.ketQua = "bạn đã thắng";
              state.soBanThang += 1;
            } else if (computer === "bua") {
              state.ketQua = "hòa nhau";
            }
          }
          break;
        case "bao":
          {
            if (computer === "bao") {
              state.ketQua = "hòa nhau";
            } else if (computer === "keo") {
              state.ketQua = "bạn đã thua";
            } else if (computer === "bua") {
              state.ketQua = "bạn đã thắng";
              state.soBanThang += 1;
            }
          }
          break;
        case "keo":
          {
            if (computer === "bao") {
              state.ketQua = "bạn đã thắng";
              state.soBanThang += 1;
            } else if (computer === "keo") {
              state.ketQua = "hòa nhau";
            } else if (computer === "bua") {
              state.ketQua = "bạn đã thua";
            }
          }
          break;

        default:
          state.ketQua = "bạn đã thắng";
      }
      state.soBanChoi += 1;
      return { ...state };
    }
  }
  return state;
};
