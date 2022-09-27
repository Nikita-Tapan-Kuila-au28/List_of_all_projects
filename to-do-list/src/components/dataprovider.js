import React,{useState,useEffect,createContext} from "react";


export const DataContext=createContext();

export  default  function DataProvider(props){
   const [todos,setTodos]=useState([]);

  useEffect(()=>{
   const todomemory=JSON.parse(localStorage.getItem('todomemory'))
   if(todomemory) setTodos(todomemory)

},[])


   useEffect(()=>{
   localStorage.setItem('todomemory',JSON.stringify(todos))
   },[todos])


  
    return(
       <DataContext.Provider value={[todos,setTodos]}>
         {props.children}
       </DataContext.Provider>
    )
}