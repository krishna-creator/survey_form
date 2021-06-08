import "./App.css";
import React, { useEffect, useState } from "react";
import Input from "./components/input";

function App() {
  const [title, setTitle] = useState("");
  const [inputs, setInputs] = useState(0);
  const [data, setData] = useState([]);

  const typeHandled = (a, b) => {
    let dummy = [...data];
    dummy.map((d) => {
      if (d.id === b) {
        d.type = a;
      }
    });
    setData(dummy);
  };

  const lableHandled = (a, b) => {
    let dummy = [...data];
    dummy.map((d) => {
      if (d.id === b) {
        d.label = a;
      }
    });
    setData(dummy);
  };

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < inputs; i++) {
      temp.push({ id: i, type: "", label: "" });
    }
    console.log(temp);
    setData(temp);
  }, [inputs]);
  const inputHandled = (e) => {
    let arr = [];
    for (let i = 0; i < inputs; i++) {
      arr.push(
        <Input
          key={i}
          id={i}
          typeChanged={typeHandled}
          labelChanged={lableHandled}
        />
      );
    }
    return arr;
  };
  const submitted = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <h1 className="jumbotron text-center header ">Survey Forms</h1>
      <div className="container">
        <form onSubmit={submitted}>
          <div className="mb-3 row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              <h2>Title :</h2>
            </label>
            <div className="col-sm-10 mt-3">
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="input" className="col-sm-2 col-form-label">
              <h2>Inputs :</h2>
            </label>
            <div className="col-sm-1 mt-3">
              <input
                type="number"
                className="form-control"
                id="input"
                onChange={(e) => setInputs(e.target.value)}
                required
              />
            </div>
          </div>
          <div>{inputHandled()}</div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
