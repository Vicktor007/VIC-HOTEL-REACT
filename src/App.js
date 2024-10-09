
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import Navbar from './component/common/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          {/* <Route exact path='/login' element={<LoginPage/>}/> */}
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
