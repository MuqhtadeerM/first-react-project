import { Link } from "react-router"

export default function UserList(){
    const userData = [
        {id:1, name:'Anil'},
        {id:2, name:'abi'},
        {id:3, name:'nike'},
        {id:4, name:'leo'},
        {id:5, name:'deer'},
        {id:6, name:'king'},
        {id:7, name:'amil'},
        {id:8, name:'anand'},
        {id:9, name:'kaumar'}
    ]
    return(
        <div style={{marginLeft: 30}}>
            <h1>User List Page</h1>
            {
                userData.map((item,index)=> (
                    <div>
                        <h4 key={index}><Link to={"/users/"+item.id}>{item.name}</Link></h4>
                    </div>
                ))
            }
        </div>
    )
}