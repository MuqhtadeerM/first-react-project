// import { useState } from "react";
import Usesr from "./Usesr";
import College from "./College";
import Student from "./Student";
import User from "./User";
import Wrapper from "./Wrapper";
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
/*   This is the normal method to pass the props but these are the static things 
function App() {
    return(
        <div>
            <h1>Props in React Js</h1>
            <Usesr name="Muqhtadeer" age={21} email="muhammedmuzawar9@gmail.com" />
        </div>
    )
} 
export default App;

// what if they are in any state shown below

function App() {
  let userName = "Muhtradeer";
  let age = 29;
  let email = "muham@gmail.com";
  return (
    <>
      <h1>Name : {userName} Age : {age} Email: {email}</h1>
    </>
  );
}
export default App;
*/

// what if we have lots of things to include we cant create h1 tag for many tags like that then we can use the Objects in React

/*
function App() {
  let userObject = {
    name: "Muqhtadeer",
    age: "29",
    email: "Muhamed@gmail.com",
  };

  // also we can use for the multiple objects
  let userObj2 = {
    name: "MM",
    age: "30",
    email: "mm@gmail.com",
  };

  let collegeNames = ["IET", "DU", "MIT", "IIT", "NIT"];
  const [student, setStudent] = useState()
  return (
    <>
      <h1>Props in React in JS</h1>
      <Usesr user={userObject} />
      <Usesr user={userObj2} />
      <College name={collegeNames[0]} />
      <College name={collegeNames[1]} />
      <College name={collegeNames[2]} />
      <College name={collegeNames[3]} />
      { student && <Student name = {student}/>}
      <button onClick={()=> setStudent("MMM")}>Update Student Name</button>
      <User />
      <User namee="MMM4"/>

    </>
  );
}
export default App;
*/

function App() {
    return (
        <div >
            <h1>Props in React Js</h1>
            <Wrapper>
                <h1>Hello Everyone</h1>
            </Wrapper>
        </div>
    )
}
export default App;