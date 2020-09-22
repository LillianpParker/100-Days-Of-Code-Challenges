import React, {useState, useEffect} from 'react';

import Daters from './components/Hello.js'

function App () {
  const [daters, setDaters] = useState([])
  useEffect(
  ()=>{
    const callDaters = async ()=>{
     await getDaters();	
   }
   callDaters();
  }, 
  []
  )
  const getDaters = async () => {
   try{
   const response = await fetch('http://localhost:3000/users')
   console.log(response)
   const daters = await response.json();
   setDaters(daters)
   }catch(error){
     console.error(error);
    }
  }
    return (
      <div className="App main">
        <h1 className="title">Rails React Dating App</h1>
        <div className="body">
        <main className="content">
        <div className="ads">
        <Daters daters={daters}/>
        </div>
        </main>
        </div>
        <nav className="nav">
            <h4>Post a New Dater </h4>
          <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" />
            <label htmlFor="starsign">Starsign: </label>
            <input type="text" id="starsign" />
            <label htmlFor="age">Age: </label>
            <input type="text" id="age" />
            <label htmlFor="img">Image: </label>
            <input type="text" id="img" />
            <label htmlFor="ltl">Likes to Laugh: </label>
            <input type="boolean" id="ltl" />
            <input type="submit" className="submit" />
          </form>
        </nav>
      </div>
    );
}

export default App;