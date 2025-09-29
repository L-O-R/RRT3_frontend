import React, { useState, useCallback } from "react";

const Button = React.memo(function Button({ onClick }) {
  console.log("Button component re-rendered!");
  return <button onClick={onClick}>Click Me</button>;
});

export function ParentWithCallback() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is new every time ParentWithCallback renders.
  // const handleClick = () => console.log("Button clicked!");

  // With useCallback, React returns the SAME function instance unless its
  // dependencies (the empty array []) change.
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Parent
      </button>
      <Button onClick={handleClick} />{" "}
      {/* Now this prop doesn't change! */}
    </div>
  );
}
