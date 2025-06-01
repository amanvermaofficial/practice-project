import React, { useState } from 'react'

function Counter() {
  const [count,setCount] = useState(0);
  const increase = ()=>{
    setCount(count+1);
  }
  const decrease = ()=>{
    setCount(count-1);
  }



  return (
    <div>
     {
        count<0 && <h1 style={{color:"red"}}>count can't be negative</h1>
     }
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default Counter
