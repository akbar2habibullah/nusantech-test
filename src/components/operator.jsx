import React from "react";

const Operator = ({ symbol, handle }) => {
  return (
    <>
      <button className="btn" onClick={handle}>
        {symbol}
      </button>
      <style jsx>{`
        .btn {
            border: 2px solid black;
            padding: 10px 15px;
            border-radius: 10px;
            background-color: white;
            margin-right: 20px;
            cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Operator;
