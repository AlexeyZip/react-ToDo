import React from 'react';

import TodoListItem from './todo-list-item';
import './todo-list.css'


const TodoList = ({todos}) => {
  const elements  = todos.map((item) => {
    const {id, ...itemProps} = item
  //  return <li><TodoListItem label={item.label} important={item.important}/></li>
   return <li className="list-group-item" key={id}><TodoListItem {...itemProps}/></li> //spread operator 
  
  })
    return (
       <ul className="list-group todo-list">
         {elements}
     </ul>
     )
   }

export default TodoList;   