import React, { use } from "react";
import useStore from "./store/store";

const App = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  // const { count, increment, decrement } = useStore();
  const store = useStore();
  console.log(store);
  return (
    <div>
      {count}
      <button onClick={() => increment()}>
        Increment by 1
      </button>
    </div>
  );
};

export default App;
