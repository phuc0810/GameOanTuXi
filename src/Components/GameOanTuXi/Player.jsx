import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="player-computer">
        {/* ý nghĩ của ironman */}
        <div className="speech-bubble">
          <img
            className="bg-white"
            style={{ borderRadius: "5px" }}
            width={100}
            height={100}
            src={
              this.props.mangKeoBuaBao.find((item) => item.datCuoc === true).img
            }
            alt={
              this.props.mangKeoBuaBao.find((item) => item.datCuoc === true).img
            }
          />
        </div>
        <img
          style={{ width: "150px", height: "150px" }}
          src="./img/gameOanTuXi/player.png"
          alt="./img/gameOanTuXi/player.png"
        />
        <div className="d-flex justify-content-center align-items-center">
          {this.props.mangKeoBuaBao.map((item, i) => {
            let border = {};
            if (item.datCuoc === true) {
              border = { border: "5px solid seagreen" };
            }
            return (
              <button
                style={border}
                onClick={() => {
                  this.props.thayDoiLuaChon(item.ma);
                }}
                className="bg-info mr-2"
                key={i}
              >
                <img
                  style={{ width: "80px", height: "80px", border: "none" }}
                  src={item.img}
                  alt={item.img}
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
    mangKeoBuaBao: state.gameOanTuXiReducer.mangKeoBuaBao,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiLuaChon: (maItem) => {
      const action = {
        type: "KEO_BUA_BAO",
        maItem,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
