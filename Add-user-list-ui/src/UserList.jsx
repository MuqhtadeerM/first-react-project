import { useEffect, useState } from "react";
import { useNavigate } from 'react-router'
import "./App.css";
export default function UserList() {

  // USING THE STATES HERE TO ADDED TO RENDER THE DATA WHEN NEEDED.
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // URL DECLARING GLOBALY WHIICH CAN ACCEESSABLE BY ALL THE FUNCTIONS 
  const url = "http://localhost:3000/users";

  // THIS WILL HELP TO FETCH THE DATA AFTER THE CALLING THE FUNCTION IN USEeFFECT 
  useEffect(() => {
    getUserData();
    setLoading(true);
  }, []);



  // GETTING THE USER DATA USING THE "GET METHOD"
  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    // THIS SYNTAX IS COMMON TO ALL THE FETCHING DATA PROBLEMS
    console.log(response);
    setUserData(response);
    setLoading(false);
  };

  // calling API for delete
  const deleteUser = async (id) => {
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });
    response = await response.json();
    if (response) {
      alert("Deleted")
      // remove delete row from the UI
      getUserData();
    }
  };


  // ADDIGN THE EDIT USER HERE USING THE EDIT BUTTON AND THE FUNCTION::
  const editUser = (id)=>{
    navigate("/edit/"+id)
  }

  return (
    <div>
      <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>
      {/* the loading is added here it will load untill the fetching the data from the API
      these are the common syntax are used here in this programming */}
      {!loading ? (
        userData &&
        userData.map((users, index) => (
          <ul key={index} className="user-list">
            <li>{users.name}</li>
            <li>{users.age}</li>
            <li>{users.email}</li>
            <li>
              <button onClick={() => deleteUser(users.id)}>Delete</button>

              {/* this is the new Edit button added herre */}
              <button onClick={() => editUser(users.id)}>Edit</button>
            </li>
          </ul>
        ))
      ) : (
        <h1>Data is Loading...</h1>
      )}
      {/* adding delete button  above*/}
    </div>
  );
}
