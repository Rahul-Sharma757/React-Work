import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ReactES6 from './Pages/ReactES6';
import TextFrom from './Components/TextFrom';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={< Home  />}></Route>
        <Route exact path='/reactES6' element={< ReactES6 />}></Route>
      </Routes>
    </Router>
    <TextFrom heading= "Change Your All text to uppercase" textareaLabel = "UpperCase" />
    </>
  );
}

export default App;
