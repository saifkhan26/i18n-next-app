"use client";

import { useState } from "react";

export default function Counter({
  dictionary,
}) {
  const [count, setCount] = useState(0);
  return (
    <p className="flex gap-4 items-center">
      This component is rendered on client:
      <button onClick={() => setCount((n) => n - 1)} className="bg-slate-900 text-slate-200 px-4 py-2 rounded-md mx-4">
        {dictionary.decrement}
      </button>
      <div className="border-slate-400">{count}</div>
      <button onClick={() => setCount((n) => n + 1)} className="bg-slate-900 text-slate-200 px-4 py-2 rounded-md mx-4">
        {dictionary.increment}
      </button>
    </p>
  );
}
