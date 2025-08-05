import { useReducer } from "react";

// const emptyData = {
//   name: "",
//   password: "",
//   email: "",
//   city: "",
//   address: ""
// };

// const reducer=(data,action)=>{
//   return {...data, [action.type]:action.val}
// }

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, emptyData);
//   console.log(state);

//   return (
//     <div>
//       <h1>useReducer</h1>
//       {/* defining the input fields */}
//       <input type="text" onChange={()=>dispatch({val:event.target.value, type:'name'})} placeholder="Enter the Name" />
//       <br /> <br />
//       <input type="text" onChange={()=>dispatch({val:event.target.value, type:'password'})} placeholder="Enter the password" />
//       <br /> <br />
//       <input type="text" onChange={()=>dispatch({val:event.target.value, type:'email'})} placeholder="Enter the email" />
//       <br /> <br />
//       <input type="text" onChange={()=>dispatch({val:event.target.value, type:'city'})} placeholder="Enter the city" />
//       <br /> <br />
//       <input type="text" onChange={()=>dispatch({val:event.target.value, type:'address'})} placeholder="Enter the address" />
//       <br /> <br />

//       <ul>
//         <li>Name: {state.name}</li>
//         <li>Password: {state.password}</li>
//         <li>Email: {state.email}</li>
//         <li>City: {state.city}</li>
//         <li>Address: {state.address}</li>
//       </ul>
//       <button onClick={()=>console.log(state)}>Add Details</button>
//     </div>
//   );
// }
const initialState = {
  count: 0,
  inc: 2,
  dec: 2,
};

const reducer = (state, action) => {
  console.log(state, action);

  // if(action.type === "INCREAMENT") {
  //   return state + 1;
  // }
  // if (action.type === "DECREAMENT") {
  //   return state - 1;
  // }
  // if (action.type === "RESET") {
  //   return state = 0;

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 2,
      };

    case "DECREMENT":
      return { ...state, count: state.count - 2 };

    case "RESET":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increament
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
}
