import React from 'react'

export default function ToDoList({items,pushToDo,displayDone}) {

   
  return (
    <div className='toDoList'>ToDoList component
  

    {items.map((item)=>{
        return <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={()=>pushToDo(item.id)}>click me</button>
           
            </div> 
    })}
     <button onClick={()=>displayDone()}>display done</button>
    </div>
  )
}
