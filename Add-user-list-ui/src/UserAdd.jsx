import { useState } from "react";

export default function UserAdd() {
  // makeing states
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");


  const createUser = async () => {
    console.log(name, age, email);

    const url = "http://localhost:3000/users";

    // for GET method only ur
    let response = await fetch(url, {
      method: "POST",
      
      body: JSON.stringify({ name, email, age }),
    });


    response = await response.json();
    if (response) {
      alert("new user added");
    }
  };


  return (
    <div style={{ textAlign: "center" }}>
      {/* making input feilds */}
      <h1>Add New User</h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter the Name"
      />
      <br /> <br />
      <input
        type="text"
        onChange={(event) => setAge(event.target.value)}
        placeholder="Enter the age"
      />
      <br /> <br />
      <input
        type="text"
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter the email"
      />
      <br /> <br />
      <button onClick={createUser}>Add Users</button>
    </div>
  );
}
