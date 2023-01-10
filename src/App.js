import './App.css';
import { Navbar } from './components';
import { Header } from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
