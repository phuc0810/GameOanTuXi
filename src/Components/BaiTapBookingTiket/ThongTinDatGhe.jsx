import React, { Component } from "react";
import { connect } from "react-redux";
import { xoaGheAction } from "../../redux/action/BaiTapDatVeAction";
class ThongTinDatGhe extends Component {
  // tinhTongTien = () => {
  //   this.props.gheDangDat.reduce((tongtien, gheDangDat, i) => {
  //     return (tongtien += gheDangDat.gia);
  //   }, 0);
  // };
  render() {
    console.log(this.props);
    return (
      <div>
        <button className="gheDuocChon"></button>{" "}
        <span style={{ fontSize: "30px", marginLeft: "46px", color: "white" }}>
          ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon"></button>{" "}
        <span style={{ fontSize: "30px", marginLeft: "10px", color: "white" }}>
          ghế bạn chọn
        </span>
        <br />
        <button className="ghe"></button>{" "}
        <span style={{ fontSize: "30px", marginLeft: "20px", color: "white" }}>
          ghế chưa đặt
        </span>
        <div
          className="mt-5"
          style={{
            fontSize: "20px",
            overflowY: "auto",
            height: "400px",
          }}
        >
          <table className="table" border="2">
            <thead>
              <tr className="text-danger">
                <th>số ghế</th>
                <th>giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.gheDangDat.map((item, i) => {
                return (
                  <tr className="text-warning">
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.xoaGhe(item.soGhe);
                        }}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="text-white">Tổng tiền</td>
                <td className="text-white">
                  {this.props.gheDangDat.reduce((tongtien, gheDangDat, i) => {
                    return (tongtien += gheDangDat.gia);
                  }, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
    xoaGhe: (soGhe) => {
      dispatch(xoaGheAction(soGhe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
