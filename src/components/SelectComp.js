import React from "react";

const SelectComp = ({ contents, callee, handleOnchange = ()=>{} }) => {

  return (
    <>
      <select name={callee} id={callee}  onChange={handleOnchange}>
        {contents.length > 0 &&
          contents.map((val, index) => (
            <option
              value={
                callee === "state" ? val.state.toLowerCase() : val.toLowerCase()
              }
              key={index}
             
            >
              {callee === "state" ? val.state : val}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectComp;
