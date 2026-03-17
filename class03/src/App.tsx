import { useState } from "react";
import { Toggle } from "./Toogle";

function App() {
  const [shouldShow, setShouldShow] = useState(true);

  const handleClickToggle = () => setShouldShow((s) => !s);

  return (
    <div className="app">
      <Toggle shouldShow={shouldShow} onClickToggle={handleClickToggle} />
    </div>
  );
}

export default App;
