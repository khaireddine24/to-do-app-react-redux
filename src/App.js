import "./App.css";
// import ToDoList from "./components/ToDoList";
import AddForm from "./components/AddForm";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <AddForm />
      <ListTask/>
    </div>
  );
}

export default App;