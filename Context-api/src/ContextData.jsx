// creating the Context first 

import { createContext } from "react";

// here we create the context data to deliver it to the data to the subject.
// this SubjectContext used in both destination (Subject) and the App.jsx is 
// the middle ware here then it delivers the date to the Subject.jsx
export const SubjectContext = createContext("Maths")