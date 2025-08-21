import { useState } from "react";
import FirstComponent from "./FirstComponent";
const App = () => {
  //  hooks should be alsways called above return keyword
  // hooks cannot be called inside of any inner functions
  let [num, setNum] = useState(6);
  // let num = 0;
  console.log("app component got rendered");
  let isWorking = true;
  let content;
  if (isWorking) {
    content = <div>is working is true</div>;
  } else {
    content = <div>is working is false</div>;
  }
  const add = () => {
    setNum(num + 1);
    // console.log(state);
  };
  return (
    <div>
      <div>
        {/*                   props */}
        <FirstComponent num={num} add={add} />

        {content}
      </div>
    </div>
  );
};

export default App;
