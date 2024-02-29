import './App.css';
import { useState , useRef} from 'react';


function App() {

  const [x , setx]= useState([])   //  دا كدا مخزن

  const inputRef = useRef() //دا علشان اربط حاجة بحاجة

  const add = ()=>{

        const value = inputRef.current.value
        const newData = {completed : false , value}    

        setx([...x , newData])

        inputRef.current.value=""
  }

  const itemDone =(index)=>{
    const newx = [...x]

    newx[index].completed =  !x[index].completed

    setx(newx)
  }

  const toDelete =(index) => {
    const newx = [...x]
    newx.splice(index,1)

    setx(newx)
  }

  return (
    
  <div className="App">

  
    <h2>To do list</h2>


      <ul>
            {
            
            x.map(({value, completed}, index  )  => {
               return<div className='div2'>
                <li className={completed ?"diffstyle" : ""} onClick={ ()=> itemDone(index)}>{value}</li>

               <span onClick={()=> toDelete(index)}>x</span>
               </div> 
              }) 
            }
      </ul>

        <input ref={inputRef} placeholder='Enter new Task...'/>


         <button onClick={add}>Add</button>
  </div>
  );
}

export default App;
