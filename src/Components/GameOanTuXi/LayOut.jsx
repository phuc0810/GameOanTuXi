import React, { Component } from "react";
import { connect } from "react-redux";
import Computer from "./Computer";
import KetQua from "./KetQua";
import Player from "./Player";
import "./res/CSS/styleGame.css";

class LayOut extends Component {
  render() {
    return (
      <div className="container-fluid bg-game">
        <div className="row">
          <div className="col-4 mt-5">
            <Player />
          </div>
          <div className="col-4 mt-5">
            <KetQua />
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
      let randomComputerItem = setInterval(() => {
        const action = {
          type: "PLAY_GAME",
        };
        dispatch(action);
        count++;
        if (count > 5) {
          clearInterval(randomComputerItem);
          const endgame = {
            type: "END_GAME",
          };
          dispatch(endgame);
        }
      }, 1000);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayOut);
