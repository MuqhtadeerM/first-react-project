// Updating and adding the new states in an array
/*
import { useState } from "react"

export default function App() {
  const [data, setData] = useState({
    name: 'Muqhtadeer',
    address:{
      city:'Delhi',
      country: 'India'
    }
  })

  const handleName=(val)=>{
    data.name = val    
    setData({...data})  //deep copy which copies the nested objects 
  }

  const handleCity=(val)=> {
    data.address.city = val;
    setData({...data})
  }

  const handleCountry = (val) => {
    data.address.country = val;
    setData({...data})

  }
  return(
    <div>
      <h1>updating the objects in state</h1>
      <input type="text" placeholder="Update Name" onChange={(event)=>handleName(event.target.value)} />

      <input type="text" placeholder="update city" onChange={(event)=>handleCity(event.target.value)} />
      <input tyep="text" placeholder="Update country" onChange={(e)=>handleCountry(e.target.value)} />
      <h2>Name: {data.name}</h2>
      <h2>city: {data.address.city}</h2>
      <h2>country: {data.address.country}</h2>

    </div>
  )
}
  */

import { useState } from "react"

export default function App() {

  const [data, setData] = useState([
    'sabit', 'bilal', 'azzzu'
  ])

  const [dataDetail, setDataDetail] = useState([
    { name:'anil', age:'29'},
    { name:'bilal', age:'24'},
    { name:'sabit', age:'26'},
  ])


  const handleOut = (name) => {
    data[data.length-1] = name;
    console.log(data);
    setData([...data])
  }

  const handleAge = (val)=> {
    dataDetail[dataDetail.length-1].age = val;
    console.log(dataDetail)
    setDataDetail([...dataDetail])
    
  }
  

  return (
    <div>
      <h1>Updating Array in State</h1>
      <input type="text" onChange={(e) => handleOut(e.target.value)} />
      {
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }

      <hr />

      <input type="text" onChange={(e)=> handleAge(e.target.value)} />
      {
        dataDetail.map((item, index)=>(
          <h4 key={index}>{item.name}, {item.age} </h4>
        ))
      }
      
    </div>
  )
}