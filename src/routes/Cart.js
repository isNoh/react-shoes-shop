import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { CartStore, DetailStore } from "../Zustore";
import "../css/Cart.css";

export function Cart() {
  const [reRender, setRerender] = useState("-");
  const { quant, btnClickplus, btnClickminus, id, name, modal, btnModalFalse } =
    CartStore();
  const { ownCart } = DetailStore();

  function stopMinus() {
    if (quant > 0) {
      btnClickminus();
    } else {
      console.log();
    }
  }
  return (
    <div className="cart">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>수량 변경</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{quant}</td>
            <td>
              <button className="cart-btn" onClick={btnClickplus}>
                +
              </button>
              <button className="cart-btn" onClick={stopMinus}>
                -
              </button>
            </td>
          </tr>
          {ownCart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    className="cart-btn"
                    onClick={() => {
                      a.quan++;

                      setTimeout(() => {
                        setRerender("");
                        setTimeout(() => {
                          setRerender("-");
                        }, 1);
                      }, 1);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="cart-btn"
                    onClick={() => {
                      a.quan > 0 ? a.quan-- : console.log();

                      setTimeout(() => {
                        setRerender("");
                        setTimeout(() => {
                          setRerender("-");
                        }, 1);
                      }, 1);
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {modal ? (
        <div className="cart-bottom">
          <div className="cart-alert">
            <div>지금 구매하시면 신규할인 20%.</div>
            <button className="mt-4" onClick={btnModalFalse}>
              닫기
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
