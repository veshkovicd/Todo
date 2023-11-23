import Todo from './components/ToDo/index.jsx';
import './App.css'
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound.jsx';
import { ListProvider } from "./components/ListContext.jsx"
import NavBar from './components/ToDo/NavBar.jsx';


function App() {
  return (
    
    <ListProvider>
      <NavBar />
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo-list' element={<Todo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </ListProvider>
  );

}

export default App
