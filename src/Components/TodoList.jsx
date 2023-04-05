import React from 'react'
import Todo from "./Todo";
 
function TodoList({ entered, onClick ,onChange }) { 
  

      return (
        
          
    entered.map((entry) => {
              
      return <Todo key={entry.id} text={entry.text} onClick={onClick} identi={entry.id} onChange={onChange } />
    }
        
      ))
}

export default TodoList