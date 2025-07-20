import { useRef } from "react"

function App() {
  
  const inputRef = useRef(null);
  const inputHandler =()=> {
    console.log(inputRef);
    inputRef.current,focus();
    inputRef.current.style.color= 'red';
    inputRef.current.placeholder="enter the pass"
    inputRef.current.value="Muqhtadeer@123"
  }

  const toggleHandler =() => {
    if (inputRef.current.style.display!='none') {
      inputRef.current.style.display='none'
    } else {
      inputRef.current.style.display='inline'
    }
  }

  return (
    <>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input ref={inputRef} type="text" placeholder="Enter user name" />
      
      <button onClick={inputHandler}>Focus on input</button>
    </>
  )
}

export default App
