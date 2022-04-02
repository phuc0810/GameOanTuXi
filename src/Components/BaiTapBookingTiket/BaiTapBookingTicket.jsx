import React, { Component } from "react";
import { connect } from "react-redux";
import "./CSS/BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "./Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((item, i) => {
      return (
        <div>
          <HangGhe hangGhe={item} soHangGhe={i} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.8)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning display-6">Đặt vé cybersoft</h1>
                <h2 className="mt-3 text-white">Màn hình</h2>
                <div
                  className="mt-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="screen"></div>
                </div>
                <div style={{ height: "500px", overflowY: "auto" }}>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <h1 className="text-white text-center ">
                  Danh Sách Ghế Bạn Chọn
                </h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaiTapBookingTicket);
