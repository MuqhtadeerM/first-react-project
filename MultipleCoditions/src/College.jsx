// function College({name}) {
//     return (
//         <>
//             <h1>Name: {name[0]}</h1>
//         </>
//     )
// }
// export default College;

import Student from "./Student";


const College = ({college}) => {
    return(
        <div>
            <h1>Name: {college.name}</h1>
            <ul>
              <li>
                <h3>City: {college.city}</h3>
              </li>
              <li>
                <h3>Website: {college.website}</h3>
              </li>
              <li>
              <Student  student/>
              </li>
            </ul>
          </div>
    )
}

export default College;