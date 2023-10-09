import "./AddPage.css";
import { useState } from "react";
const AddPage = (prop) => {
  const [enteredToDo, setEnteredToDo] = useState("");
  const enteredToDoChangeHandler = (event) => {
    setEnteredToDo(event.target.value);
  };
  const newToDo = {
    enteredToDo: enteredToDo,
    id: Math.random().toString(),
  };
  const addnewToDo = () => {
    prop.onClickAddDisAppear();
    prop.onGetNewToDo(newToDo);
  };
  return (
    <>
      <div className="background">
        <div className="AddPagecontainer">
          <input type="text" onChange={enteredToDoChangeHandler} />
          <input
            type="button"
            className="Addbtn"
            value={"Add"}
            onClick={addnewToDo}
          />
        </div>
      </div>
    </>
  );
};
export default AddPage;
