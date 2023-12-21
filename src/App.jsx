import "./App.css";
import OptimizedUpdateFilterComponent from "./components/OptimizedUpdateFilterComponent";
import SlowUpdateFilterComponent from "./components/SlowUpdateFilterComponent";

function App() {
  return (
    <>
    <SlowUpdateFilterComponent />
    <OptimizedUpdateFilterComponent />
    </>
  );
}

export default App;
