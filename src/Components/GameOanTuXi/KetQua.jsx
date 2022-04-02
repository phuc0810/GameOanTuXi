import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    return (
      <div>
        <div className="content text-white">
          <h1 className="text-danger">{this.props.ketQua}</h1>
          <p style={{ fontSize: "30px" }}>
            số bàn thắng:{" "}
            <span className="text-warning">{this.props.soBanThang}</span>
          </p>
          <p style={{ fontSize: "30px" }}>
            số lần chơi:{" "}
            <span className="text-warning">{this.props.soLanChoi}</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.gameOanTuXiReducer.ketQua,
    soBanThang: state.gameOanTuXiReducer.soBanThang,
    soLanChoi: state.gameOanTuXiReducer.soLanChoi,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
