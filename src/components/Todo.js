
import "./components/Style.css"

const Todo = () => {
  return (
  
   <div className="main">
        <div className="App">
       <div className="Header">
      <h1>TODO-LIST</h1>
      </div>
      <div className="todo_body">
        <input type="  text  " 
        placeholder="    what to do..."
        />
        <button>Add</button>
      </div>
      <div className="middle">
          <ul>
            <li>Build a todo-list app</li>
            <li>Learn useState</li>
            <li>Learn useEffect</li>
            <li>Do my figma Assignment</li>
          </ul>
      </div>
    </div>
   </div> 
  )
}

export default Todo