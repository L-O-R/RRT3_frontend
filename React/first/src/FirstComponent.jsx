import React from "react";

const FirstComponent = (props) => {
  //   console.log(num);
  console.log(props);
  return (
    <div>
      num is {props.num}{" "}
      <button onClick={props.add}>add</button>
    </div>
  );
};

export default FirstComponent;
