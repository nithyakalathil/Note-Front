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


</Routes>
</BrowserRouter> 
    </div>
  );
}

export default App;
