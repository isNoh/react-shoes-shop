import React, { useEffect, useState } from "react";
import { Nav, Table } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import "../css/Detail.css";
import { DetailStore } from "../Zustore";
export function Detail({ shoes, stock }) {
  const [tab, setTab] = useState(0);
  const [alert, setAlert] = useState(true);
  const [mySwitch, setMySwitch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  let { id } = useParams();
  let IntId = parseInt(id);
  const [detailStock, setDetailStock] = useState(stock[id]);
  function StockInfo() {
    return (
      <div>
        {detailStock > 0 ? (
          <p>재고 : {detailStock}</p>
        ) : (
          <p>재고가 없습니다.</p>
        )}
      </div>
    );
  }

  function Go2home() {
    history.push("/");
  }

  return (
    <div className="container">
      <div className="row detail-main">
        <DetailHead alert={alert} />
        <DetailBody
          IntId={IntId}
          shoes={shoes}
          id={id}
          setDetailStock={setDetailStock}
          detailStock={detailStock}
          Go2home={Go2home}
          StockInfo={StockInfo}
        />
        <TabBtn setTab={setTab} />

        <TabModal
          tab={tab}
          shoes={shoes}
          id={id}
          mySwitch={mySwitch}
          setMySwitch={setMySwitch}
        />
      </div>
    </div>
  );
}

function DetailHead({ alert }) {
  return (
    <>
      <h2 className="detail-title">Detail</h2>
      {alert ? (
        <div className="detail-alert">
          <div className="detail-alert__inner">
            재고가 얼마 남지 않았습니다.
          </div>
        </div>
      ) : null}
    </>
  );
}

function DetailBody({
  IntId,
  shoes,
  id,
  setDetailStock,
  detailStock,
  Go2home,
  StockInfo,
}) {
  const { ownCart } = DetailStore();
  const [toCart, setToCart] = useState(false);
  function myCart(e) {
    toCart
      ? alert("이미 주문한 상품입니다.")
      : ownCart.push({ id: id, name: shoes[id].title, quan: 1 });
    setToCart(true);
  }
  return (
    <>
      <div className="col-md-6">
        <img
          src={`https://codingapple1.github.io/shop/shoes${IntId + 1}.jpg`}
          alt="img"
          width="100%"
        />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{shoes[id].title}</h4>
        <p>{shoes[id].content}</p>
        <p>{shoes[id].price}원</p>
        <StockInfo />
        <button
          className="btn btn-danger"
          style={{ marginRight: "5px" }}
          onClick={() => {
            myCart();

            toCart ? console.log() : alert("상품을 장바구니에 담았습니다.");

            toCart ? console.log() : setDetailStock(detailStock - 1);
          }}
        >
          주문하기
        </button>
        <button
          className="btn btn-danger"
          style={{ marginLeft: "5px" }}
          onClick={Go2home}
        >
          뒤로가기
        </button>
      </div>
    </>
  );
}

function TabBtn({ setTab }) {
  return (
    <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link
          eventKey="link-0"
          onClick={() => {
            setTab(0);
          }}
        >
          상품정보
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-1"
          onClick={() => {
            setTab(1);
          }}
        >
          판매자정보
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-2"
          onClick={() => {
            setTab(2);
          }}
        >
          배송정보
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

function TabModal({ tab, id, shoes, setMySwitch }) {
  if (tab === 0) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="detail-table">#</th>
            <th colSpan={3}>상품정보 제공고시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="detail-table">제품명</td>
            <td colSpan={4}>{shoes[id].title}</td>
          </tr>

          <tr>
            <td className="detail-table">가격</td>
            <td colSpan={4}>{shoes[id].price}원</td>
          </tr>
          <tr>
            <td className="detail-table">제품 소재</td>
            <td colSpan={4}>상세페이지 참조</td>
          </tr>
          <tr>
            <td className="detail-table">치수</td>
            <td colSpan={4}>사이즈표 참고</td>
          </tr>
          <tr>
            <td className="detail-table">제조국</td>
            <td colSpan={4}>중국</td>
          </tr>
          <tr>
            <td className="detail-table">취급시 주의사항</td>
            <td colSpan={4}>상품 Tag 참고</td>
          </tr>
          <tr>
            <td className="detail-table">품질보증기준</td>
            <td colSpan={4}>상품 Tag 참고</td>
          </tr>
        </tbody>
      </Table>
    );
  } else if (tab === 1) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="detail-table">#</th>
            <th colSpan={3}>판매자정보</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="detail-table">상호 / 대표자</td>
            <td colSpan={4}>알 수 없음</td>
          </tr>
          <tr>
            <td className="detail-table">브랜드</td>
            <td colSpan={4}>알 수 없음</td>
          </tr>
          <tr>
            <td className="detail-table">사업자번호</td>
            <td colSpan={4}>19980805</td>
          </tr>
          <tr>
            <td className="detail-table">이메일</td>
            <td colSpan={4}>xxxxxxx@gmail.com</td>
          </tr>
          <tr>
            <td className="detail-table">영업소재지</td>
            <td colSpan={4}>대한민국 경기도</td>
          </tr>
        </tbody>
      </Table>
    );
  } else {
    return (
      <div>
        <div>
          <h5 className="mt-3">택배 배송 / 반송지 정보 관련 안내 사항</h5>
        </div>
        <div className="detail-modal">
          <div className="detail-modal__title">택배배송</div>
          <div className="detail-modal__text">
            <ul>
              <li>본 스토어는 전 제품 50% 무료배송입니다.</li>
              <li>
                브랜드 및 제품에 따라 입점 업체 배송과 자체 배송으로 나뉩니다.
              </li>
              <li>결제확인 후 1~3일 정도 소요됩니다.</li>
            </ul>
          </div>
        </div>
        <div className="detail-modal">
          <div className="detail-modal__title">반송지정보</div>
          <div className="detail-modal__text">
            <ul>
              <li>(99999) 대한민국 경기도 가나시 다라구 마바동 123-4</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
