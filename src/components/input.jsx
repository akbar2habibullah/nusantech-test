import React from "react";

const Input = ({ value, checklist, handleInput, handleCheck, index }) => {
  return (
    <>
      <div className="input-subgroup">
        <input
          type="number"
          className="input-number"
          name="value"
          value={value}
          onChange={(e) => handleInput(e.target.valueAsNumber, index)}
        />
        <input
          type="checkbox"
          className="input-check"
          name="checklist"
          checked={checklist}
          onChange={(e) => handleCheck(e.target.checked, index)}
        />
      </div>
      <style jsx>{`
        .input-number {
          border: 2px solid black;
          width: 250px;
          padding: 10px;
          margin-right: 10px;
        }

        .input-subgroup {
            margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};

export default Input;
