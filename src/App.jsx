import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { Toaster } from 'react-hot-toast'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'

function App() {

  return (
    <>
    <Toaster/>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/Home' element={<Home/>} /> 
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path='/Admin' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
