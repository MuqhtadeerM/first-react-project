// import { useRef } from "react";
import "./App.css";
/*
// to build the controller Component tht controls the form with input elements.
function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1>Controller Component</h1>
      <form action="" method="get">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter the name"
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter the Password"
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter the email"
        />
        <br />
        <br />
        <button>Submit</button>
        <button
          onClick={() => {
            setName("");
            setPassword("");
            setEmail("");
          }}
        >
          Clear
        </button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
    </>
  );
}
export default App;


function App() {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleForm = (event)=> {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user,password)
  }


  const handleFormRef = (event)=> {
    event.preventDefault();
    const user = userRef.current.value
    const password = passwordRef.current.value
    console.log("handleFormRef",user, password);
  
    
  }
  return (
    <>
      <h1>Ucontrolled component</h1>
      <form action="" method="post" onSubmit={handleForm} >
        <input type="email" id="users" placeholder="Enter User Name" />
        <br />
        <input type="password" id="password" placeholder="Enter the User Password" />
        <br />
        <button >Submit</button>
      </form>
      <hr />

      <h1>uncontrolled component with useRef</h1>
      <form action='' method="post" onSubmit={handleFormRef}>
        <input type="email" ref={userRef}  id="userRef" placeholder="Enter the email"/>
        <br />
        <input type="password" ref={passwordRef} id="passwordRef" placeholder="Password"/>
        <br />
        <button>SubmitRef</button>
      </form>
    </>
  );
}
export default App;
*/

import  User from "./User";
function App() {
  
  const displayName=(name)=>{
    alert(name)
  }

  const getUser=()=> {
    alert("get user function called")
  }
  return(
    <>
      <h1>Call parent Function from child component</h1>
      <User displayName={displayName} name="Muqhtadeer" onClick={getUser} />
    </>
  )
}
export default App;