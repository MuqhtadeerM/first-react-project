import { useState } from "react";
import "./App.css";

function App() {
  // managing the name states to store the data
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  // managing the password state
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleName = (event) => {
    console.log(event.target.value);
    if (event.target.value.length > 5) {
      setNameErr(
        "Please Enter the Valid User Name Only Five Charecter Allowed"
      );
    } else {
      setNameErr("");
    }
  };

  const handlePassword = (event) => {
    let regex = /^[A-Z0-9]+$/i;
    console.log(event.target.value);
    if (regex.test(event.target.value)) {
      setPasswordErr("");
    } else {
      // this displays the error message.
      setPasswordErr("Please Enter the Valid password");
    }
  };
  return (
    <div>
      {/* making input feilds and also managing the calling the functions here  */}
      <input
        className={nameErr ? "error" : ""}
        type="text"
        onChange={handleName}
        placeholder="Enter the Name"
      />
      {/* displays th e the error message  using this  span  */}
      <span className="red-color">{nameErr && nameErr}</span>
      <br /> <br />
      {/* applying the validations using the input fields  */}
      <input
        className={passwordErr ? "error" : ""}
        type="password"
        onChange={handlePassword}
        placeholder="Enter the Name"
      />
      <span className="red-color">{passwordErr && passwordErr}</span>
      <br /> <br />
      <button disabled={nameErr || passwordErr}>Login</button>
    </div>
  );
}

export default App;
