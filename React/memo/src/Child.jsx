import { useCallback, useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  console.log("Performing expensive calculation...");
  // Simulate a slow operation
  for (let i = 0; i < 1000000000; i++) {}
  console.log("calculation done");
  return num * 2;
};
function Child() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // This calculation will only re-run when `number` changes.
  // It will NOT re-run when `count` changes.
  // const calculatedValue = useMemo(
  //   () => expensiveCalculation(number),
  //   [number]
  // );

  const calculatedValue = useMemo(
    () => expensiveCalculation(number),
    [number]
  );

  // const value = calculatedValue();
  return (
    <div>
      <p>Unrelated Counter: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Counter
      </button>

      <p>
        Result of expensive calculation: {calculatedValue}
      </p>
      <button onClick={() => setNumber((n) => n + 1)}>
        Increment Number for Calc
      </button>
    </div>
  );
}

export default Child;
