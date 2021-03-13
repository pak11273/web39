import "./App.css";

import { useEffect, useState } from "react";

function getUrl(path) {
  if (process.env.NODE_ENV === "production") {
    return path;
  }
  return "http://localhost:5000" + path;
}

function App() {
  const [msg, setMsg] = useState("bye");
  useEffect(() => {
    fetch(getUrl("/api/hello"))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMsg(data.message);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">{msg}</header>
    </div>
  );
}

export default App;
