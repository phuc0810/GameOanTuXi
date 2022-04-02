let stateDefault = {
  mangKeoBuaBao: [
    { ma: "bao", img: "./img/gameOanTuXi/bao.png", datCuoc: false },
    { ma: "keo", img: "./img/gameOanTuXi/keo.png", datCuoc: true },
    { ma: "bua", img: "./img/gameOanTuXi/bua.png", datCuoc: false },
  ],
  ketQua: "you winner",
  soBanThang: 0,
  soLanChoi: 0,
  computer: { ma: "bua", img: "./img/gameOanTuXi/bua.png" },
};

export const gameOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "KEO_BUA_BAO": {
      let newmangKeoBuaBao = [...state.mangKeoBuaBao];
      newmangKeoBuaBao = newmangKeoBuaBao.map((item, i) => {
        if (item.ma === action.maItem) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangKeoBuaBao = newmangKeoBuaBao;
      return { ...state };
    }
    case "PLAY_GAME": {
      let random = Math.floor(Math.random() * 3);
      let itemRandom = state.mangKeoBuaBao[random];
      state.computer = itemRandom;
      return { ...state };
    }
    case "END_GAME": {
      let newmangKeoBuaBao = [...state.mangKeoBuaBao];
      let item = newmangKeoBuaBao.find((item) => item.datCuoc === true);
      switch (item.ma) {
        case "bua":
          {
            if (state.computer.ma === "bua") {
              state.ketQua = "hoa";
            } else if (state.computer.ma === "bao") {
              state.ketQua = "thua";
            } else if (state.computer.ma === "keo") {
              state.ketQua = "thang";
              state.soBanThang += 1;
            }
          }
          break;
        case "bao":
          {
            if (state.computer.ma === "bua") {
              state.ketQua = "thang";
              state.soBanThang += 1;
            } else if (state.computer.ma === "bao") {
              state.ketQua = "hoa";
            } else if (state.computer.ma === "keo") {
              state.ketQua = "thua";
            }
          }
          break;
        case "keo":
          {
            if (state.computer.ma === "bua") {
              state.ketQua = "thua";
            } else if (state.computer.ma === "bao") {
              state.ketQua = "thang";
              state.soBanThang += 1;
            } else if (state.computer.ma === "keo") {
              state.ketQua = "hoa";
            }
          }
          break;
      }
      state.mangKeoBuaBao = newmangKeoBuaBao;
      state.soLanChoi += 1;
      return { ...state };
    }
  }

  return state;
};
