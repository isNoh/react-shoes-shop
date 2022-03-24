/*eslint-disable*/
import React, { useState } from "react";

import MyNavbar from "./components/MyNavbar";
import shoesData from "./data.js";
import "./css/App.css";

import { Switch, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Detail } from "./routes/Detail";
import { Cart } from "./routes/Cart";

function App() {
  const [shoes, setShoes] = useState(shoesData);
  const [stock, setStock] = useState([10, 11, 12, 9, 10, 12]);
  const [btnMore, setBtnMore] = useState(true);
  return (
    <div className="app">
      <MyNavbar />

      <Switch>
        <Route exact path="/">
          <Home
            shoes={shoes}
            setShoes={setShoes}
            btnMore={btnMore}
            setBtnMore={setBtnMore}
          />
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} stock={stock} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
