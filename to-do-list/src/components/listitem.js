
import React,{useState} from "react";




export default function ListItem({ todo, id, ifchecked }) {
  const [onEdit, setOnEdit] = useState(false)
  const [editValue,setEditValue]=useState(todo.title)

  const handleOnEdit = (id) => {
    setOnEdit(true)
  }

  const handleOnSave=(id)=>{
    setOnEdit(false)
  }


  if (onEdit) {
    <li>
      <input type="text" id="editValue" value={editValue} name="editValue" checked={todo.completed} 
      onChange={(e) =>setEditValue(e.target.value.toLowerCase()) 
      } />
          {editValue}
          <button  onClick={()=>handleOnSave(id) }>Save</button>

    </li>

  } else {
    return (
      <li className={todo.completed ? "active" : ''}>
        <label htmlFor={id}>
          <input type="checkbox" id={id} checked={todo.completed} onChange={() => ifchecked(id)} />
          {todo.title}

        </label>
        <button disabled={todo.completed} onClick={handleOnEdit}>Edit</button>

      </li>
    )
  }
}