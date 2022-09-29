import React from "react";
import Test from "../Test/Test";

const Test2 = (props) => {
  return (
    <div>
      <h2>
        My Name is {props.name} and my age is {props.age}
      </h2>
    </div>
  );
};

export default Test2;
