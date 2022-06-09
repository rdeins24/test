import React, { useState } from "react";
import Blog from "./Blog";
import DoneItems from "./DoneItems";
import Home from "./Home";
import Post from "./Post";
import ToDoList from "./ToDoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderApp from "./RenderApp";
import Main from "./Main";
let data = [
  { id: 1, name: "todo1" },
  { id: 2, name: "todo2" },
  { id: 3, name: "todo3" },
  { id: 4, name: "todo4" },
];

function App() {
  const [number, setNumber] = useState(0);
  const [items, setItems] = useState(data);
  const [doneList, setDoneList] = useState([]);
  const [showDoneList, setShowDoneLIst] = useState(true);

  const displayDone = () => {
    setShowDoneLIst(true);
    console.log("clicked");
  };

  const pushToDo = (id) => {
    let newList = items.filter((item) => item.id === id);

    setDoneList([...newList, ...doneList]);
    console.log(doneList);
  };
  console.log(`im from App usestate ${doneList}`);

  const increase = () => {
    setNumber((number) => number + 1);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="todo" element={<ToDoList items={items} pushToDo={pushToDo} displayDone={displayDone} />}/>
          <Route path="done" element={<DoneItems doneList={doneList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Route path="/" element={<App />} /> */
}
{
  /* <Route path="blog" element={<Blog number={number} increase={increase}/>} />
      <Route path="post" element={<Post />} /> */
}

{
  /* <DoneItems doneList={doneList} increase={increase } number={number}/> */
}
