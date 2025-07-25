/*
import { useRef } from "react"

function App() {
  const h1Ref = useRef(null);
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

  const h1Handler = () => {
    h1Ref.current.style.color = "green"
  }
  return (
    <>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input ref={inputRef} type="text" placeholder="Enter user name" />
      <button onClick={inputHandler}>Focus on input</button>

      <h1 ref={h1Ref}>Hello world</h1>
      <button onClick={h1Handler}>Focus on input</button>

    </>
  )
}
export default App


// Using the forwordRef in React
import { useRef } from "react"
import UserInput from "./UserInput";

export default function App() {
  const inputRef  = useRef(null)
  const updateInput = ()=> {
    inputRef.current.value=1000;
    inputRef.current.focus();
    inputRef.current.style.color="red"
  }
  return(
    <div>
      <h1>Forward Ref</h1>
      This is the old method used before react 19 but we can use it in react 19 but we cant use it in react 20 
      <UserInput ref={inputRef}/> 
      <button onClick={ updateInput }>Update Input Field</button>
    </div>
  )
}



// this is used when we submiting the button like submitting....

import {useFormStatus} from 'react-dom'
export default function App() {

  const handleSubmit = async ()=>{
    await new Promise(res=>setTimeout(res, 4000));
    console.log("submit");
  }

  function LoginFun() {
    const {pending} = useFormStatus();
    console.log(pending);
    
    return(
      <div>
        <input type="text" placeholder="Enter user" />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <button disabled={pending}>{pending? 'Submitting...' : 'Submit'}</button>
      </div>
    )
  }

  return (
    <>
      <h1>useFormStatus Hooks in React js 19</h1>
      <form method="post"  action={handleSubmit}>
        <LoginFun />
      </form>
    </>
  );
}


import { useTransition } from "react"

export default function App() {
  const [pending, startTransition] = useTransition()
  const handleButton = async () => {
    startTransition (async ()=> {
      await new Promise(res=>setTimeout(res, 10000))
    })
    
  }
  return(
    <>
      <h1>useTransition method in reactjs</h1>
      {
        pending?
        <img src="https://media1.tenor.com/m/UnFx-k_lSckAAAAC/amalie-steiness.gif" />
        :null
      }
      <button disabled={pending} onClick={handleButton}>Click</button>
    </>
  )
}



export default function App() {
  return(
    <>
      <h1>Keeping components pure</h1>
      
      <Cup guest={1}/>
      <Cup guest={3}/>

    </>
  )
}

const Cup = ({guest}) => {
  let count=guest;
  return(<h1>we have {count} guest and we have to make count {count} cap of tea</h1>)
}
  
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const handleAddUsers=()=> {
    setUsers([...users, user])
  }
  const total = users.length;
  const last = users[users.length-1];
  const unique = [...new Set(users)].length
  return(
    <div>
      <h2>Totoal user : {total}</h2>
      <h2>last user : {last}</h2>
      <h2>unnique user : {unique}</h2>


      <input onChange={(event)=>setUser(event.target.value)} type="text" />
      <button onClick={handleAddUsers}>Add User</button>
      {
        users.map((item, index)=>(
          <h4 key={index}>{item}</h4>
        ))
      }
    </div>
  )
}
export default App;

*/

import { useActionState } from "react"


// useActionState Hook

export default function App() {

  const handleSubmit= async (previousData, formData)=> {
    let name = formData.get('name');
    let password = formData.get('password')
    await new Promise(res=>setTimeout(res,3000))
    console.log("handle the form",name,password);
    
    if (name && password) {
      return {message: 'successfully login'}
    } else {
      return {error: 'Invalid name and password'}
    }
  }

  const [data, action, pending] = useActionState(handleSubmit, undefined)
  console.log(data);
  
  return(
    <>
      <form action={action}>
        <input type="text" placeholder="Enter the name" name="name" />
        <br />
        <br />
        <input type="password" placeholder="Enter the password" name="password" />
        <br />
        <br />
        <button disabled={pending}>Submit data</button>
        {
          data?.error && <span style={{color: 'red'}}>{data?.error}</span>
        }
        {
          data?.message && <span style={{color: 'green'}}>{data?.message}</span>
        }
      </form>
    </>
  )
}