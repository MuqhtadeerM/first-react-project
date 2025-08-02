import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// this is the process of making new edit page
export default function UserEdit() {
  const { id } = useParams(); //defines the single stats for the api
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  //     this is use to redirect the webiste to  home
  const navigate = useNavigate();
  // GETTING ID FROM THE URL WITH ID
  const url = "http://localhost:3000/users/" + id;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    // api calls the single user
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  //   function to call the api PUT
  const updateUserData = async () => {
    console.log(name, age, email);
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    console.log(response);
    if (response) {
      alert("User Data Updated Successfully");
      navigate("/");   // redirecting the page after the page updation
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add User Details </h1>

      {/* defining the input feilds here */}
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="user name"
      />
      <br />
      <br />

      {/* adding onChange to update the value of the state here in all input values  */}
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="user age"
      />
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="user email"
      />
      <br />
      <br />
      {/* above we used the defaultvalue to add the default values already present in the input feilds
     (means populated data in the input fiels) */}
      {/* added the Edit button here */}
      <button onClick={updateUserData}>Update User</button>
    </div>
  );
}
