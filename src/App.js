import React, {useState} from 'react';
import './App.css';

function App() {

  const [name, setName] = useState({
    name: "Andrii",
    lastName: 'Liashenko'
  });

  const [newName, setNewName] = useState({
    name: "",
    lastName: ''
  });

  const onChangeName = (e) =>{
    console.log(newName)
    e.preventDefault()
    const {name,lastName} = newName;
      setName((state)=>{
        return {
          ...state,
          name,
          lastName
        }
      })

      setNewName({
        name: '',
        lastName: ''
      })

  }

const setNewNameFunc = (e)=>{
  setNewName((state)=>{
    return {
      ...state,
      [e.target.name]: e.target.value
    }
  })
}  

  return (


    <div className="App">
      <h1>{name.name} {name.lastName}</h1> 
      <form onSubmit={onChangeName}>
        <input type="text" name='name' value={newName.name} onChange={setNewNameFunc}/>
        <input type="text" name='lastName' value={newName.lastName} onChange={setNewNameFunc}/>
        <button type='submit' onClick={onChangeName}>Submit</button>

      </form>
    </div>
  );
}

export default App;
