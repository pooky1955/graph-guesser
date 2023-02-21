import logo from "./logo.svg";
import "./normalize.css";
import "./App.css";
import { useEffect, useRef } from "react";
import Desmos from "desmos";

function App() {
  const graphLoaded = useRef(false)
  useEffect(() => {
    if (!graphLoaded.current){
        const elt = document.querySelector(".graph");
        elt.style.width = "95vw";
        elt.style.height = "80vmin";
        const calculator = Desmos.GraphingCalculator(elt);
        calculator.setExpression({ id: "graph1", latex: "f(x)=x^2", secret: true });
        calculator.setExpression({ id: "graph2", latex: "g(x)=0"});
        calculator.setExpression({id: "loss",latex: `L = \\sqrt{\\int_{-1}^{1} (f(x)-g(x))^2 dx}`, secret: true})
        calculator.setExpression({id: "lossPublic", latex: 'L'})
        graphLoaded.current = true
    }
  }, []);
  return (
    <div className="App">
      <nav className="App-nav">
        <div className="nav-title">Graph Guesser</div>
        <div className="nav-links">
          <div>About</div>
          <div>Play</div>
        </div>
      </nav>
      <main className="App-header">
        <p>Guess the graph below using the input viewer provided! Come as close as you can to the function that is shown!</p>
        <div className="graph"></div>
      </main>
    </div>
  );
}

export default App;
