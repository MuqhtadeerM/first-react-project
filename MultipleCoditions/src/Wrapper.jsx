function Wrapper({children}) {
    return(
        // stylling the element using css 
        <div style={{color:"green", border:"5px solid green", width:"300px", margin:"10px", alignItems:"center",
        justifyItems:"center"}}>
        // should call like this 
            {children}  
        </div>
    )
}

export default Wrapper;
