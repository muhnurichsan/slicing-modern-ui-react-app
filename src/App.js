import "./App.css";
import { Navbar, Brand } from "./components";
import { Header, WhatGPT3 } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
        <Brand></Brand>
        <WhatGPT3></WhatGPT3>
      </div>
    </div>
  );
}

export default App;
