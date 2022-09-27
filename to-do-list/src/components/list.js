import React, { useContext } from "react";
import { DataContext } from "./dataprovider";
import ListItem from "./listitem";


export default function List() {
  const [todos, setTodods] = useContext(DataContext);

  const switchComplete = id => {
    const newTodos = [...todos]
    newTodos.forEach((index, todo) => {
      if (index === id) {
        todo.completed = !todo.completed 
      }
    })
    setTodods(newTodos)
  }
  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem todo={todo} key={index} id={index} ifchecked={switchComplete} />))
      }

    </ul>

  )
}