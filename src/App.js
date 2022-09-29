import { useState } from "react";
import "./App.css";
import AllGun from "./components/AllGun/AllGun";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGun increaseCount={countIncrease} />
    </div>
  );
}
export default App;
