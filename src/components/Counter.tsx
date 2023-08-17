import { useState, ReactNode } from "react";

type CounterProps = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: CounterProps) => {
  const [count, setCount] = useState<number>(1);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h2>{children(count)}</h2>
      <div>
        <button onClick={incrementHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrease</button>
      </div>
    </>
  );
};

export default Counter;
