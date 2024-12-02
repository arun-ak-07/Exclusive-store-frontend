import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Toaster/>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/Home' element={<Home/>} /> 
      <Route path='/SignIn' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
