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
  const toggleMode = (cls) => {
    removeBodyClassess();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const removeBodyClassess = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }
  return (
    <>
      <Header NavbarBrand={"Brand1"} NavbarLink1={"React ES6"} NavbarLink2={"textForm"} NavbarLink3={"about"} toggleMode={toggleMode} mode={mode} />
      <div className="container">
        <Alert alert={alert} />
        <h1 className='text-center'>Hello</h1>
        <TextFrom showAlert={showAlert} textareaLabel='practice' />
      </div>
    </>
  )
}

export default Home
