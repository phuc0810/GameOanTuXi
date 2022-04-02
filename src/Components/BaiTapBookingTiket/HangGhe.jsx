import React, { Component } from "react";
import { connect } from "react-redux";
import {
  datGheAction,
} from "../../redux/action/BaiTapDatVeAction";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, i) => {
      let cssGheDat = "";
      let disabled = false;
      // trạng thái ghế đã bị đặt
      if (ghe.daDat) {
        cssGheDat = "gheDuocChon";
        disabled = true;
      }
      // xét trạng thái ghế đang được đặt
      let findIndex = this.props.gheDangDat.findIndex(
        (item) => item.soGhe === ghe.soGhe
      );
      let cssGheDangDat = "";
      if (findIndex !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          className={`ghe ${cssGheDat} ${cssGheDangDat}`}
          key={i}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((item, i) => {
      return <span className="rowNumber">{item.soGhe}</span>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className="text-white text-left mt-2 ml-5"
        style={{ fontSize: "25px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gheDangDat: state.BaiTapDatVeReducer.gheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
