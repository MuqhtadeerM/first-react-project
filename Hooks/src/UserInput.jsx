// This is the old method 
/* 
import { forwardRef } from "react";

const UserInput=(props, ref)=> {
    return(
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}

export default forwardRef(UserInput);


 we have new update in react 19 
const UserInput = (props) => { 

    return(
        <div>
             we use the latest version of react 19 here.
            <input type="text" ref={props.ref}/>
        </div>
    )
}
export default UserInput;

*/

