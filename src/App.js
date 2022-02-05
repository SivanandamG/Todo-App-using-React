//import { Todo } from "./components/Todo";
import "./App.css";
import Todos from "./Components/todos";

function App() {
  document.title='Todo'
  return (
    <div className="outterScreen">
      <div className="App"><Todos /></div>
    </div>
  );
}

export default App;
