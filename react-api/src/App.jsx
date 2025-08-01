import { useEffect, useState } from "react";
import './App.css'
export default function App() {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async() => {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUsersData(response.users)
  }
  console.log(usersData);
  
  return (
    <>
      <h1>fetch data from API</h1>
      {
        usersData && usersData.map((user)=> (
        <ul className="user-list user-list-head">
          <li >
            {user.firstName}
          </li>
          <li>
            {user.lastName}
          </li>
          <li>
            {user.age}
          </li>
        </ul>  
        ))
      }
    </>
  );
}
