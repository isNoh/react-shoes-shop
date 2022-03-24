import React from "react";
import { Button } from "react-bootstrap";
import "../css/Jumbotron.css";
export function Jumbotron() {
  return (
    <div className="jumbo-box">
      <h1>20% Season Off</h1>
      <p>For more information, please click the button below.</p>
      <Button variant="outline-light">More</Button>
    </div>
  );
}
