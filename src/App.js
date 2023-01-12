import "./App.css";
import { Navbar, Brand } from "./components";
import { Header } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
        <Brand></Brand>
      </div>
    </div>
  );
}

export default App;
