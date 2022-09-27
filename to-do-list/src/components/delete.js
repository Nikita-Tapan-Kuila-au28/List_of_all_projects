
 import React from "react";




 export default function Delete(){
     return(
        
   <div className="row">
   <label htmlFor='all'>
     <input type="checkbox" name="all" id="all" />
     ALL
   </label>
   <p>You have 0 task to do</p>
   <button id="delete">Delete</button>
 </div>
     )
 }