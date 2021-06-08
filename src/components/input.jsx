import React, { Component } from "react";
const Input = (props) => {
  return (
    <div className="container">
      <div className="row  g-2 m-3">
        <h3>Input {props.id + 1}</h3>
        <div className="col-auto">
          <label htmlFor="staticEmail2" className="visually-hidden">
            Type
          </label>
          <input
            type="text"
            className="htmlForm-control mx-2"
            id="staticEmail2"
            onChange={(e) => props.typeChanged(e.target.value, props.id)}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Label
          </label>
          <input
            type="text"
            className="htmlForm-control mx-2"
            id="inputPassword2"
            onChange={(e) => props.labelChanged(e.target.value, props.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
