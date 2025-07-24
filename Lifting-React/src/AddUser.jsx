
function AddUser({setUser}) {
    return(
        <div>
            <h1>Add User</h1>
            <input onChange={(event)=>setUser(event.target.value)} type="text" placeholder="Enter the User Name" />
        </div>
    )
}
export default AddUser;