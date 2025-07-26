import useToggle from "./useToggle"


function App() {

  const [value, toggleValue] = useToggle(true)

  const [data, setData] = useToggle(true)
  // console.log("value---", value);
  
  return (
    <>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={()=>toggleValue(false)}>Hide Heading</button>
      <button onClick={()=> toggleValue(true)}>Show Heading</button>

      {
        value? <h1>custom hooks in react js</h1> : null
      }

      <hr />
      <button onClick={setData}>Toggle heading</button>
      <button onClick={()=>setData(true)}>show heading</button>
      <button onClick={()=>setData(false)}>hide heading</button>
      {
        data? <h1>Second Heading</h1> : null
      }
    </>
  )
}

export default App
