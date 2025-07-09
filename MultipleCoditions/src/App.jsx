// import { useState } from "react";
import Usesr from "./Usesr";
/*
function App() {
    const [count, setCount] = useState(0);

    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Counter</button>
            {
                count == 0 ? <h1>Condition 0</h1>
                :count == 1 ? <h1>Condition 1</h1>
                :count == 2 ? <h1>Condition 2</h1>
                :count == 3 ? <h1>Condition 3</h1>
                :count == 4 ? <h1>Condition 4</h1>
                :<h1>None</h1>
            }
        </>
    )
 }

 export default App;
 */

//  Props in javaScript
function App() {
    let Name = "Muqhtadeer"
    return(
        <div>
            <h1>Props in React Js</h1>
            <Usesr name={Name}/>
        </div>
    )
}
export default App;