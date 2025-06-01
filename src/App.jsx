import { useState } from 'react'
import './App.css'
import Welcome from './component/Welcome'
import Counter from './component/Counter'
import TextInput from './component/TextInput'
import Todos from './component/Todos'

function App() {



  return (
    <>
     <Welcome name="Aman" />
     {/* <Welcome name="Ravi" />
     <Counter />
     <TextInput /> */}
     <Todos />
    </>
  )
}

export default App
