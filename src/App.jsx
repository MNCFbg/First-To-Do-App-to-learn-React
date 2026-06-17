import { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
