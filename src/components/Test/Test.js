import React from "react";
import Test2 from "../Test2/Test2";

const Test = ({ name }) => {
  return (
    <div>
      <Test2 name="bayejid" age="23">
        My name is {name}
      </Test2>
    </div>
  );
};

export default Test;
