import React, { useState } from 'react'

function UseStateManagment() {
    const [state, setstate] = useState(100)
    function myNewFunction(value){
        setstate(value);
    }
  return (
    <div>
        <h2>Hello from State Managment ?</h2>
        <h1>Our Value: {state}</h1>
        <button onClick={()=>myNewFunction(200)}>
            Click Here to Change value
        </button>
      
    </div>
  )
}

export default UseStateManagment
