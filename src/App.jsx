import './App.css'
import Home from './pages/Home'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from './pages/questions/Questions'
import Footer from './components/Footer'
import PreCaseOne from './pages/questions/one';
import PreCaseTwo from './pages/questions/second';


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home /> }/>
          <Route path='/questions/one' element={ <PreCaseOne /> }></Route>
          <Route path='/questions/two' element={ <PreCaseTwo /> }></Route>
          <Route path='/questions/questions' element={ <Questions /> }></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}