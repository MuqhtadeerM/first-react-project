import { useState } from "react";
import "./App.css";
import College from "./College";
import { SubjectContext } from "./ContextData";

function App() {
  // this state is created to maintain the state
  const [subject, setSubject] = useState("");
  return (
    <div style={{ background: "yellow", padding: 10 }}>

      {/* this is the provider created in the contect data */}
      {/* we receives the data to the  app.jsx first then all the operations can be performed here */}
      <SubjectContext.Provider value={subject}>

        {/* this will create a select option */}
        <select
          defaultValue={subject}
          onChange={(event) => setSubject(event.target.value)}
          style={{ background: "black", padding: 10, color: "pink" }}
        >
          <option value="">Select the Subject</option>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Hindi">Hindi</option>
        </select>

        <h1>Context API</h1>
        <College />
      </SubjectContext.Provider>

      {/* this will create the clear button to clear the  selected option or subject*/}
      <button onClick={() => setSubject("")}>Clear Subject</button>
    </div>
  );
}

export default App;
