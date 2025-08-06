import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/Slice";

function App() {

  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(increment());
  }
  const handleDec = () => {
    dispatch(decrement());
  }


  return (
    <div>
      <button onClick={handleInc}>+</button>
      <h1>Count: {count}</h1>
      <button onClick={handleDec}>-</button>
    </div>
  );
}

export default App;
