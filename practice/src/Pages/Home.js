import React, { useState } from 'react'
import Header from '../Components/Header'
import Alert from '../Components/Alert'
import TextFrom from '../Components/TextFrom';

function Home() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "sucess");
    }
  }
  return (
    <>
      <Header NavbarBrand={"Brand1"} NavbarLink1={"React ES6"} NavbarLink2={"textForm"} NavbarLink3={"about"} toggleMode={toggleMode} mode={mode} />
      <div className="container">
        <Alert alert={alert} />
        <h1 className='text-center'>Hello</h1>
        <TextFrom showAlert={showAlert} textareaLabel='Testing' />
      </div>
    </>
  )
}

export default Home
