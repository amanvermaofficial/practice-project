import React, { useState } from 'react'

export default function TextInput() {
  const [text,setText] = useState('');

  const handleChange = (e)=>{
    setText(e.target.value);
  }

  return (
    <div style={{padding:"10px",textAlign:"center"}}>
      <h3>Type something here</h3>
      <input 
      type="text"
      onChange={handleChange}
      placeholder='Type here'
      />
      <p>{text}</p>
    </div>
  )
}
