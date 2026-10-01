import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Add from "./components/Add";
import Search from "./components/Search";
import View from "./components/View";
import Edit from "./components/Edit"; 

function App() {
  return (
    <div >
      <BrowserRouter>
<Routes>
  
<Route path='/' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<Add/>}/>
            <Route path='/search' element={<Search/>}/>
    <Route path='/view' element={<View/>}/>
<Route path="/edit/:id" element={<Edit />} />



</Routes>
</BrowserRouter> 
    </div>
  );
}

export default App;
