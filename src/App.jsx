import Todo from './components/ToDo/index.jsx';
import './App.css'
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
   
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/TodoList' element={<Todo />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    {/* <div>
      <Todo />
    </div> */}
    </>
  );

}

export default App
