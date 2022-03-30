import React, { Component } from "react";
import { connect } from "react-redux";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import "./res/CSS/styleGame.css";

class LayOut extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid bg-game">
        <div className="row text-white">
          <div className="col-4 mt-5">
            <Player />
          </div>
          <div className="col-4 mt-5">
            <KetQuaTroChoi />
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-4 mt-5">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // khai bao ham lap lai
      let randomComputerItem = setInterval(() => {
        const action = {
          type: "PLAY-GAME",
        };
        dispatch(action);
        count++;
        if (count > 10) {
          clearInterval(randomComputerItem);
          const endgame = {
            type: "END_GAME",
          };
          dispatch(endgame);
        }
      }, 500);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayOut);
