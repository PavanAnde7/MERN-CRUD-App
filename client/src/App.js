import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// components
import NavBar from './components/NavBar';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import Home from './components/Home';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddUser/>}></Route>
        <Route path='/all' element={<AllUser/>}></Route>
        <Route path='/edit/:email' element={<EditUser/>}></Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
