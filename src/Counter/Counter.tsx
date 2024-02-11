import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  // 1) UseRef se puede usar para guardar referencias a valores que no modifican
  // la vista del componente
  const countRef = React.useRef(count);
  // 2) UseRef se puede usar para guardar referencias a objetos
  const abortController = React.useRef(new AbortController());
  // 3) UseRef se puede usar para guardar referencias a elementos del DOM
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleIncrement = () => {
    countRef.current = countRef.current + 1;
  };

  const handleDecrement = () => {
    countRef.current = countRef.current - 1;
  };

  const logData = () => {
    buttonRef.current?.click();
    // Esto no es una buena práctica
    // buttonRef.current?.appendChild(document.createElement("p"));
    alert(countRef.current);
  };

  const cancelRequest = () => {
    abortController.current.abort();
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button ref={buttonRef} onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>Decrement</button>

      <button onClick={logData}>Log data</button>
    </div>
  );
};

export default Counter;
