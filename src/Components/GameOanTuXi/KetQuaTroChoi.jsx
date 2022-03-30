import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <h1 className="text-info">{this.props.ketQua}</h1>
        <p style={{ fontSize: "40px" }}>
          Số bàn thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </p>
        <p style={{ fontSize: "40px" }}>
          Số lần chơi:{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.gameOanTuXiReducer.ketQua,
    soBanThang: state.gameOanTuXiReducer.soBanThang,
    soBanChoi: state.gameOanTuXiReducer.soBanChoi,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
