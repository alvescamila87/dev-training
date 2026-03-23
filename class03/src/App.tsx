import { useState } from "react";
import { Toggle } from "./Toogle";

function App() {
  const [shouldShow, setShouldShow] = useState(true);
  const [count, setCount] = useState(0);

  const handleClickToggle = () => setShouldShow((s) => !s);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="app">
      <Toggle shouldShow={shouldShow} onClickToggle={handleClickToggle} />
      <br></br>
      <h1>Contagem: {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
