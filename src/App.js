import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";

function App() {
  return (
    <div className="App">
      <div id="grid">
        <Grid />
      </div>
      {/* <h1>{`Height is ${hh} and width is ${ww}`}</h1>
      {array.map((el, i) => (
        <div key={i * 1000} className={"row row-" + i.toString()}>
          {array.map((el, idx) => (
            <div
              style={{
                backgroundColor:
                  "#" + Math.floor(Math.random() * 16777215).toString(16),
              }}
              key={i * 10 + idx + 1}
              className={"column column-" + idx.toString()}
            ></div>
          ))}
        </div>
      ))} */}
    </div>
  );
}

export default App;
