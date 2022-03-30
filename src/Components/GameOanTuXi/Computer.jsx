import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `
    @keyframes randomItem${Date.now()} {
      0% {top: -20px;}
      25% {top: 20px;}
      50% {top: -20px;}
      75% {top: 20px;}
      100% {top: 0px;}
    }`;
    console.log(this.props);
    return (
      <div className="player-computer">
        <style>{keyframe}</style>
        {/* đánh tù xì */}
        <div className="speech-bubble">
          <div
            className="oanTuXi"
            style={{
              position: "relative",
              background: "#fff",
              width: "80%",
              height: "80%",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                position: "absolute",
                animationName: `randomItem${Date.now()}`,
                animationDuration: "0.5s",
                left: "25px",
              }}
              src={this.props.computer.img}
              alt={this.props.computer.img}
              width={80}
            />
          </div>
        </div>
        {/* hình ironMan */}
        <img
          style={{ width: "150px", height: "150px", marginTop: "20px" }}
          src="./img/gameOanTuXi/playerComputer.png"
          alt="./img/gameOanTuXi/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.gameOanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
