import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { MyShoes } from "../components/MyShoes";
export function Home({ shoes, setShoes, btnMore, setBtnMore }) {
  return (
    <>
      <Jumbotron />

      <MyShoes
        shoes={shoes}
        setShoes={setShoes}
        btnMore={btnMore}
        setBtnMore={setBtnMore}
      />
    </>
  );
}
