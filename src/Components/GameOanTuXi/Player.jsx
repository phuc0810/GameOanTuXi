import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    console.log(this.props);
    let { mangOanTuXi } = this.props;
    return (
      <div className="player-computer">
        {/* đánh tù xì */}
        <div className="speech-bubble">
          <div
            className="oanTuXi"
            style={{
              background: "#fff",
              width: "80%",
              height: "80%",
              borderRadius: "10px",
            }}
          >
            <img
              src={this.props.mangOanTuXi.find((kq) => kq.datCuoc === true).img}
              alt={this.props.mangOanTuXi.find((kq) => kq.datCuoc === true).img}
              width={80}
            />
          </div>
        </div>
        {/* hình ironMan */}
        <img
          style={{ width: "150px", height: "150px", marginTop: "20px" }}
          src="./img/gameOanTuXi/player.png"
          alt="./img/gameOanTuXi/player.png"
        />
        {/* keo bua bao */}
        <div className="option d-flex">
          {mangOanTuXi.map((kq, i) => {
            let border = {};
            if (kq.datCuoc) {
              border = { border: "5px solid green" };
            }
            return (
              <button
                onClick={() => {
                  this.props.thayDoiKeoBuaBao(kq.ma);
                }}
                key={i}
                className="mr-2 btnItem bg-dark"
                style={border}
              >
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={kq.img}
                  alt={kq.img}
                />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangOanTuXi: state.gameOanTuXiReducer.mangOanTuXi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiKeoBuaBao: (ma) => {
      const action = {
        type: "THAY_DOI_KBB",
        ma,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
