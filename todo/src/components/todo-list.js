import React from 'react';

import TodoListItem from './todo-list-item';



const TodoList = ({todos}) => {
  const elements  = todos.map((item) => {
    const {id, ...itemProps} = item
  //  return <li><TodoListItem label={item.label} important={item.important}/></li>
   return <li key={id}><TodoListItem {...itemProps}/></li> //spread operator 
  
  })
    return (
       <ul>
         {elements}
     </ul>
     )
   }

export default TodoList;   