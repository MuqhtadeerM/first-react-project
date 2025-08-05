import { Suspense } from "react";
import "./App.css";
import { use } from "react";

const fetchData = () =>
  fetch("https://dummyjson.com/users").then((response) => response.json());
const userResource = fetchData();

export default function App() {
  return (
    <>
      <h1>use API in React js</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Users userResource={userResource} />
      </Suspense>
    </>
  );
}

const Users = ({ userResource }) => {
  const userData = use(userResource);
  console.log(userData.Users);
  return (
    <div>
      <h1>User List</h1>
      {userData?.users?.map((user, index) => (
        <h1 key={index}>{user.firstName}</h1>
      ))}
    </div>
  );
};
