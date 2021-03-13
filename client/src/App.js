import "./App.css";

import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("hello");
  return (
    <div className="App">
      <header className="App-header">{msg}</header>
    </div>
  );
}

export default App;
