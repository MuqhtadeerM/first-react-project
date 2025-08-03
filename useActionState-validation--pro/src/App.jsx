import { useActionState } from "react";
import "./App.css";

export default function App() {
  const handleLogin = (prevData, formData) => {
    // this contains the 2 types of the data one is previous data another one the current data
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;
    if (!name || name.length > 5) {
      return { error: "name should not contain more than five" ,name , password};
    } else if (!regex.test(password)) {
      return { error: "password can contain only numbers and alphabets" ,name , password};
    } else {
      return { message: "Login successfully" ,name , password };
    }
  };
  const [data, action, pending] = useActionState(handleLogin);

  return (
    <div>
      <h1>Validation with useActionState in Reactjs</h1>
      {
        data?.message && <span style={{color:'green'}}>{data?.message}</span>
      }
      {
        data?.error && <span>{data.error}</span>
      }
      <form action={action}>
        <input defaultValue={data?.name}   ype="text" name="name" placeholder="Enter the User Name" />
        <br /> <br />
        <input
          defaultValue={data?.password}
          type="password"
          name="password"
          placeholder="Enter the User password"
        />
        <br /> <br />
        <button disabled={data?.error}>Login</button>
      </form>
    </div>
  );
}
