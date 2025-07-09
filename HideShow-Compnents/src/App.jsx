import { useState } from "react";
import User from './User'
function App() {
  const [display, setDisplay] = useState(true)
  return(
    <>
      <h1>Muqhtadeer</h1>
      <button onClick={()=> setDisplay(!display)}>Toggle</button>
      {
        display ? <User />: null
      }
    </>
  )
}

export default App;