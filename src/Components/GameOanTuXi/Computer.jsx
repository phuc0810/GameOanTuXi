import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyFrame = `@keyframes randomItem${Date.now()} {
      0% {top: 0px;}
      25% {top: -20px;}
      50% {top: 20px;}
      75% {top: -20px;}
      100% {top: 0px;}
    }`;
    console.log(this.props);
    return (
      <div className="player-computer" style={{ position: "relative" }}>
        {/* ý nghĩ của ironman */}
        <style>{keyFrame}</style>
        <div className="speech-bubble">
          <img
            style={{
              borderRadius: "5px",
              position: "absolute",
              animationName: `randomItem${Date.now()}`,
              animationDuration: "1s",
            }}
            width={100}
            height={100}
            src={this.props.computer.img}
            alt={this.props.computer.img}
          />
        </div>
        <img
          style={{
            width: "150px",
            height: "150px",
          }}
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Computer);
