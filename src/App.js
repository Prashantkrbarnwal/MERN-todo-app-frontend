import { useEffect,useState } from "react";
import Todo from "./components/Todo";
import { addtodo, getAllTodo, updatetodo, deletetodo} from "./utils/HandleApi";
//import { updatetodo } from "../../backend/controllers/todocontroller";

function App() {

const [todo, setTodo] = useState([])
const [text, setText] = useState("")
const [isUpdating, setIsUpdating] = useState(false)
const [todoId, settodoId] = useState("")

useEffect(() => {
  getAllTodo(setTodo)
}, [])

const updatemode =(_id, text) => {
  setIsUpdating(true)
  setText(text)
  settodoId(_id)
}

  return (
    <div className="App">

      <div className="container">

        <h1>
        Todo App
        </h1>

        <div className="top">
 
          <input type ="text" 
          placeholder="Add todos..." 
          value={text}
          onChange={(e) => setText(e.target.value)}/>

            <div
            className="add" 
            onClick={ isUpdating ? 
              () =>updatetodo(todoId, text, setTodo, setText, setIsUpdating) 
            : () =>addtodo(text, setText, setTodo)}>
              {isUpdating ? "Update" : "Add" }
              </div>

        </div>

        <div className="list">

          {todo.map((item) => <Todo 
          key = {item._id} 
          text = {item.text}
          updatemode={() => updatemode(item._id, item.ext)}
          deletetodo={() => deletetodo(item._id, setTodo)} />)}

        </div>

      </div>

    </div>
  );
}

export default App;
