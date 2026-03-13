import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="content-container">
        <h1>{props.prodName}</h1>
        <p>{props.prodDetails}</p>
      </div>
      <div className="counter-container">
        <h2>Quantity</h2>
        <p className="count-shower">ZERO</p>
        <button className="btn btn-inc">+</button>
        <button className="btn btn-dec">-</button>
      </div>
    </div>
  );
}
