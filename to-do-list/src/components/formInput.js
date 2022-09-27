import React,{useContext,useState} from "react";
import {DataContext} from "./dataprovider";



export default function FormInput(){
    const [todos,setTodods]=useContext(DataContext);
    const[taskName,setTaskName]=useState('');
 
    const addTodo=(e)=>{
        e.preventDefault();
        setTodods([...todos,{title:taskName,completed:false}]);
        setTaskName('')
    }



    return(
        <form autoComplete='off' onSubmit={addTodo}>
        <input type="text" name="todos" placeholder="Add notes" 
        value={taskName} onChange={e=>setTaskName(e.target.value)}  id="notes"  required />
        <button type="submit">Create</button>
      </form>  
    )
}