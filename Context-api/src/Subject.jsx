import { useContext } from "react"
import { SubjectContext } from "./ContextData"

export default function Subject() {
    // finally the contect api is here through th app.jsx
    const Subject = useContext(SubjectContext)
    return (
        <div style={{background: 'green', padding: 10}}>
            <h1>Subject is : {Subject}</h1>
        </div>
    )
}