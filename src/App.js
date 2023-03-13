import Calculator from "./components/Calculator";
import LOGO from "./images/logo.svg"
import "./App.css"


function App() {
  return (
    <div className="app-container">

      <div className="app-logo">
        <img src={LOGO} alt="Splitter-logo"/>
      </div>

      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
