import {Routes,Route} from "react-router-dom"
import './App.css';
import Todo from "./components/todo"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Todo/>}></Route>
     
    </Routes>
    </>
  );
}

export default App;
