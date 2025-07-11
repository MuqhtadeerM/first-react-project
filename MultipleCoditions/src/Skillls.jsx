// Handle checkboxes
import { useState } from "react";
function Skillls() {
    const [skills, setSkills] = useState(["PHP", "JS", "Python", "CSS"])
  return (
    <div>
      <h3>Select Your Skills</h3>
      <input type="checkbox" id="php" value="php"/>
      <label htmlFor="php">PHP</label>
      <br></br>
      <input type="checkbox" id="js" value="js"/>
      <label htmlFor="js">JS</label>
      <br></br>
      <input type="checkbox" id="py" value="py"/>
      <label htmlFor="py">Python</label>
      <br></br>

      <input type="checkbox" id="css" value="css"/>
      <label html
      For="css">CSS</label>

      <h1>{skills.toStringfy()}</h1>
    </div>
  );
}
export default Skillls;
