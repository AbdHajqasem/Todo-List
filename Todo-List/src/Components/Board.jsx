import "./Board.css";
import { useState } from "react";
import AddPage from "./AddPage";
import Card from './Card'
const Board = () => {
const [showPopUpPage,setshowPopUpPage]=useState(false);
const[arr,setArr]=useState([]);
const appearPopUpPage=()=>{
  setshowPopUpPage(true);
}
const disappear=()=>{
  setshowPopUpPage(false);
}
const getNewToDo=(newToDo)=>{
  setArr([...arr,newToDo]);
  
}
  return (
    <>
      <div className="Cards-Container">
        <div className="headercontainer">
          <h2 className="header">Todo-List</h2>
        </div>
        {arr.map((element) => (
        <Card
        toDo={element.enteredToDo}
        key={element.id}
        />
      ))}
        <div>
          <input type="button" className="Addbtn" onClick={appearPopUpPage} value={"Add a card"} />
        </div>
      </div>
      {showPopUpPage&&<AddPage onGetNewToDo={getNewToDo} onClickAddDisAppear={disappear}/>}
    </>
  );
};
export default Board;
