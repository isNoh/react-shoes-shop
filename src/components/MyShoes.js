import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function MyShoes({ shoes, setShoes, btnMore, setBtnMore }) {
  const [loading, setLoading] = useState(false);
  function More() {
    setLoading(true);
    setBtnMore(false);
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        setShoes([...shoes, ...result.data]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert("로딩 불러오기에 실패하였습니다.");
      });
  }

  return (
    <div className="container">
      <div className="row">
        {shoes.map((a, i) => {
          return (
            <div className="col-md-4" key={i}>
              <Link
                to={`detail/${i}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div>
                  <img
                    alt={`img${i}`}
                    src={`https://codingapple1.github.io/shop/shoes${
                      i + 1
                    }.jpg`}
                    width="100%"
                  />
                  <h2>{a.title}</h2>
                  <p>
                    {a.content} & {a.price}원
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
        {loading ? <h1>Loading...</h1> : null}
      </div>
      {btnMore ? (
        <button className="btn btn-primary" onClick={More}>
          더보기
        </button>
      ) : null}
    </div>
  );
}
