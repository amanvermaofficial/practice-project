import React, { useEffect, useState } from 'react'
import '../index.css'

function Todos() {
  const [text,setText] = useState('');
  const [todos,setTodos] = useState([]);
  const [isEditing,setIsEditing] = useState(false)
  const [currentIndex,setCurrentIndex] = useState(null)

  const handleChange = (e)=>{
    setText(e.target.value);
  }  

  const handletodos = (e)=>{
    if(text===''){
      alert("Please write something!")
      return
    }
    setText('');
    setTodos([...todos,text]);
  }

  const handleDelete = (index) =>{
      if(window.confirm("Are you sure?")){
        setTodos(todos.filter((todo,i)=>(i!==index)));
      }
  }


  const handleEdit = (index)=>{
    setText(todos[index])
    setCurrentIndex(index)
    setIsEditing(true)
  }

  const handleUpdate = ()=>{
     if(text===''){
      alert("Please write something!")
      return
    }
    const updatedTodos = [...todos];
    updatedTodos[currentIndex] = text;
    setTodos(updatedTodos);
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

  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem('todos'))
    if(savedTodos && savedTodos.length > 0){
      setTodos(savedTodos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <>
    <div style={{padding:"10px"}}>
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
            <div key={index} style={{marginBottom:"3px"}}>
                 <li  className={index===todos.length-1? "fade-in" : ""} style={{display:"flex",justifyContent:"space-between",padding:"10px",background:"wheat",color:"black",borderRadius:"5px"}}>{todo}
                    <div style={{display:"flex",gap:"2px"}}>
                      <button style={{padding:"3px",background:"red",color:"white"}} onClick={()=>(handleDelete(index))}>Delete</button>
                      <button style={{padding:"3px",background:"green",color:"white"}} onClick={()=>(handleEdit(index))}>Edit</button>
                    </div>
                 </li>
            </div>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Todos
