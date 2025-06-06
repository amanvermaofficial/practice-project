import React, { useState } from 'react'

function Todos() {
  const [text,setText] = useState('');
  const [todos,setTodos] = useState([]);
  const [isEditing,setIsEditing] = useState(false)
  const [currentIndex,setCurrentIndex] = useState(null)

  const handleChange = (e)=>{
    setText(e.target.value);
  }

  const handletodos = (e)=>{
    setText('');
    setTodos([...todos,text]);
  }

  const handleDelete = (index) =>{
       return setTodos(todos.filter((todo,i)=>(i!==index)));
  }


  const handleEdit = (index)=>{
    setText(todos[index])
    setCurrentIndex(index)
    setIsEditing(true)
  }

  const handleUpdate = ()=>{
    const updatedTodos = [...todos];
    updatedTodos[currentIndex] = text;
    setCurrentIndex(null)
    setIsEditing(false)
    setText('')
  }

  const handleKeydown = (e)=>{
    if(e.key === "Enter"){
    if(isEditing){
      handleUpdate()
    }else{
      handletodos()
    }
  }
  }
  
  return (
    <>
    <div style={{paading:"10px"}}>
      <input type="text" 
      onChange={handleChange}
      onKeyDown={handleKeydown}
      placeholder='Add a todo'
      style={{padding:"10px"}}
      value={text}
      />
      {isEditing ? (<button onClick={handleUpdate} style={{marginLeft:"10px",padding:"10px",background:"green",color:"white"}}>Update</button>):(<button onClick={handletodos} style={{marginLeft:"10px",padding:"10px",background:"green",color:"white"}}>Add</button>)}   
    </div>
    <div style={{padding:"10px"}}>
        <ul>
          {todos.map((todo,index,arr)=>(
            <div>
                 <li key={index} style={{display:"flex",justifyContent:"space-between",padding:"10px",background:"wheat",color:"black"}}>{todo}
                      <button style={{padding:"3px",background:"red",color:"white"}} onClick={()=>(handleDelete(index))}>Delete</button>
                      <button style={{padding:"3px",background:"green",color:"white"}} onClick={()=>(handleEdit(index))}>Edit</button>
                 </li>
               
            </div>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Todos
