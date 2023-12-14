import Home from './Sign_In_Up';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './SignUp';
import HomePage from './Homepage';
import Cart from './Cart';

function App() {

  return(
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create_account' element={<CreateAccount/>}/>
        <Route path='/menu' element={<HomePage />}/>
        <Route path='/cart' element={<Cart />}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App;
