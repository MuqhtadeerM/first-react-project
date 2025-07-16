// passing the data in component with a click
// function Student({name}) {
//     return(
//         <>
//             <hr />
//             <h1>Student Name :{name}</h1>
//             <hr />
//         </>
//     )
// }
// export default Student;

const Student = ({ student }) => {
  <>
    <h3>students</h3>
    {
        college.student.map((student) => (
      <ul>
        <li>{student.name} </li>
      </ul>
        ))
    }
  </>;
};

export default Student;
