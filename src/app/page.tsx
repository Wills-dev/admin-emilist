"use client";

import Button from "@/components/atoms/Button/Button";
import { RootState } from "@/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/store/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-center"> Welcome</h1>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <span>{counterValue}</span>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </Button>
    </div>
  );
}
