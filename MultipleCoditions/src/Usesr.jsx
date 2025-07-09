/*  this is use for only for static things
function Usesr({name, age, email}){

    return (
        <div>
            <h1>Name :{name}</h1>
            <h1>Age :{age}</h1>
            <h1>Age :{age}</h1>

        </div>
    )
}
export default Usesr
*/
// for the objects we use this
function Usesr({ user }) {
  return (
    <div>
      <hr />
      <h1>Name :{user.name}</h1>
      <h1>Age :{user.age}</h1>
      <h1>Email :{user.email}</h1>
    </div>
  );
}
export default Usesr;
