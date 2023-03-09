import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
import UserList from './UserListing';
import UserCreate from './UserCreate'

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />}></Route>
          <Route path='/user/create' element={<UserCreate />}></Route>
          <Route path='/user/detail/:userid' element={<UserDetail />}></Route>
          <Route path='/user/update/:userid' element={<UserEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
