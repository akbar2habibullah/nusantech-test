import React, { useState, useEffect } from "react";

import Input from "./components/input";
import Operator from "./components/operator";

function App() {
  const [number, setNumber] = useState([
    { value: 0, checklist: true },
    { value: 0, checklist: true },
    { value: 0, checklist: true },
  ]);
  const [result, setResult] = useState();

  useEffect(() => {
    console.log(number);
  }, [number]);

  const handleInput = (input, index) => {
    let tmp = [...number];
    let value = isNaN(input) ? 0 : input;

    tmp[index] = {
      ...number[index],
      value,
    };

    setNumber(tmp);
  };

  const handleCheck = (checklist, index) => {
    let tmp = [...number];

    tmp[index] = {
      ...number[index],
      checklist,
    };

    setNumber(tmp);
  };

  const handleSum = () => {
    if (check()) {
      let tmp = 0;

      number.forEach(({ value, checklist }) => {
        if (checklist) tmp += value;
      });

      setResult(tmp);
    } else {
      alert("Ceklis setidaknya dua angka");
    }
  };

  const handleSubtract = () => {
    if (check()) {
      let tmp;

      if (number[0].checklist) {
        tmp = number[0].value + number[0].value;
        number.forEach(({ value, checklist }) => {
          if (checklist) tmp -= value;
        });
      } else {
        tmp = number[1].value + number[1].value;
        number.forEach(({ value, checklist }) => {
          if (checklist) tmp -= value;
        });
      }

      setResult(tmp);
    } else {
      alert("Ceklis setidaknya dua angka");
    }
  };

  const handleMultiply = () => {
    if (check()) {
      let tmp = 1;

      number.forEach(({ value, checklist }) => {
        if (checklist) tmp *= value;
      });

      setResult(tmp);
    } else {
      alert("Ceklis setidaknya dua angka");
    }
  };

  const handleDiv = () => {
    if (check()) {
      let tmp;

      if (number[0].checklist) {
        tmp = number[0].value * number[0].value;
        number.forEach(({ value, checklist }) => {
          if (checklist) tmp /= value;
        });
      } else {
        tmp = number[1].value * number[1].value;
        number.forEach(({ value, checklist }) => {
          if (checklist) tmp /= value;
        });
      }

      setResult(tmp);
    } else {
      alert("Ceklis setidaknya dua angka");
    }
  };

  const check = () => {
    let tmp = 0;

    number.forEach(({ checklist }) => {
      if (checklist) tmp += 1;
    });

    return tmp > 1 ? true : false;
  };

  return (
    <>
    <div className="app">
      <div className="input-group">
        {number.map(({ value, checklist }, index) => (
          <Input
            value={value}
            checklist={checklist}
            handleInput={handleInput}
            handleCheck={handleCheck}
            index={index}
          />
        ))}
      </div>
      <div className="btn-group">
        <Operator symbol="+" handle={handleSum}/>
        <Operator symbol="-" handle={handleSubtract}/>
        <Operator symbol="x" handle={handleMultiply}/>
        <Operator symbol="/" handle={handleDiv}/>
      </div>
      <hr/>
      <div className="result">
        <span>Hasil:</span>
        <span>{result}</span>
      </div>
    </div>
    <style jsx>{`
      .app {
        max-width: 310px;
        margin: auto;
      }

      .input-group {
        margin-top: 50px;
      }

      .btn-group {
        margin-bottom: 15px;
      }

      .result {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
    </>
  );
}

export default App;
