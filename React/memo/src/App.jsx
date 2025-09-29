import React, {
  useCallback,
  useMemo,
  useState,
} from "react";
import Child from "./Child";

const App = () => {
  console.log("Parent Component");
  const [count, setCount] = useState(0);

  return (
    <section>
      <div>
        <h1>{count}</h1>
        <br />
        <br />
        <button onClick={() => setCount(count + 1)}>
          Click
        </button>

        <br />
        <br />
        <Child />
      </div>
    </section>
  );
};

export default App;
