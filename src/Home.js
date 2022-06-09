import React from 'react'
import { useState } from 'react';
import DoneItems from "./DoneItems";
import ToDoList from "./ToDoList";
let data = [{id:1,name:'todo1'},{id:2,name:'todo2'},{id:3,name:'todo3'},{id:4,name:'todo4'}]

function Home() {
  const [items,setItems]=useState(data)
  const [doneList,setDoneList]=useState([])
  const [showDoneList,setShowDoneLIst]=useState(false)
//   const [cartButton,setCartButton]=useState(true)


  const pushToDo=(id)=>{
    let newList = items.filter((item)=>item.id === id)
    setDoneList([...newList,...doneList])
    }

    const displayDone=()=>{
      setShowDoneLIst(true)
      console.log('clicked')
    }
    const hideDone=()=>{
      setShowDoneLIst(false)
      console.log('clicked')
    }
  return (
    <div>
      app component1
      <button onClick={()=>displayDone()}>show done</button>
      {/* <button onClick={()=>Done()}>hide done</button> */}
      <ToDoList items={items} pushToDo={pushToDo}/>
    { showDoneList && <DoneItems doneList={doneList} />}

    </div>
  );
}

export default Home