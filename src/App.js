import logo from './logo.svg';
import './App.css';

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
