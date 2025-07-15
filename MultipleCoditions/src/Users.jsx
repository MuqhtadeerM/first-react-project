const User = ({data}) => {
    return(
        <div style={{
            border: "1px solid green",
            padding: "10px",
            margin: "10px",
            width: "400px",
            borderRadius: "10px"
        }}>
            <h4>Name: <span style={{color: 'green'}}>{data.name}</span></h4>
            <h4>Age: <span style={{color: 'green'}}>{data.age}</span></h4>
            <h4>Emails: <span style={{color: 'green'}}>{data.email}</span></h4>

        </div>
    )
}

export default User;