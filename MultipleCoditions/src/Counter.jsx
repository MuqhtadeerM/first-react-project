import { useEffect } from "react";
/*
function Counter({counter, data}) {
    const getCounter = () => {
        console.log("call only");
    }
    getCounter();  
    return (
        <div>
            <h1>Counter Value {counter}</h1>
            <h1>Data Value {data}</h1>
        </div>
    )
}
export default Counter;
*/



// Counter Life Cycle of the React:
const Counter = ({ count, data }) => {

    // Mounting iin React
    useEffect(()=> {
        console.log("mounting phase only")
    }, [])

    useEffect(()=> {
        console.log("Updating the phase only")
    }, [count])

    useEffect(()=> {
        return ()=> {
            console.log("Unmount")
        }
    }, [])

    return (
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Data Value {data}</h1>
        </div>
    )
}

export default Counter;