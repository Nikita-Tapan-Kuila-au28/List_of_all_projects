
import './App.css';
import {  useSelector } from "react-redux";
import Registration from "./components/Registration";



function App() {
  const users=useSelector(state=>state.users)
   console.log(users)



  
  return (
    <div className="App">
    
     <Registration />
     
     
     
    </div>
    
  );
}



export default App;


