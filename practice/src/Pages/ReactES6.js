import React, { useState } from 'react'
import Alert from '../Components/Alert';
import Header from '../Components/Header';

function ReactES6() {

  class Car {
    constructor(name) {
      this.brand = name;
    }
    presents() {
      return "I have a " + this.brand;
    }
  }

  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }
    show() {
      return this.presents() + ', it is a ' + this.model;
    }
  }
  const Rcar = new Model('ford', "mustang");
  const myCar = new Car('Ford');
  const herCar = new Car('Range Rover');
  myCar.presents();

  //---------------------   Arrow functions ------------------------//
  const hello = function () {
    return "Hello World!";
  }
  const hello2 = () => {
    return "Welcome to the Virtual World ......!!!"
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
      showAlert("Light mode has been enabled", "success");
    }
  }
  const [text, setText] = useState('');
  const handleOnChange = (e) => { //to add new value in text area //
    setText(e.target.value);
  }

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
  return (
    <>
      <Header NavbarBrand={"Brand1"} NavbarLink1={"React ES6"} NavbarLink2={"textForm"} NavbarLink3={"about"} toggleMode={toggleMode} mode={mode} />
      <div className='container py-5'>
        <Alert alert={alert} />
        <h1>React ES6 Classes</h1>
        <p><code>{myCar.brand}</code></p>
        <textarea rows='3' cols={25} onChange={handleOnChange} value={"dfghjkl;" + text}>
        </textarea>
        <h1>Method in Classes</h1>
        <textarea data-html='true' rows={5} cols={30} onChange={handleOnChange} value={"dfghjkl;" + text}></textarea>
        <p><code>{herCar.presents()}</code></p>
        <h1>Class Inheritance</h1>
        <p>To create a class inheritance, use the extends keyword. <br /> A class created with a class inheritance inherits all the methods from another class: </p>
        <textarea rows={7} cols={35} onChange={handleOnChange} value={"dfghjkl;" + text}></textarea>
        <p><code>{Rcar.show()}</code></p>
        <p>The super() method refers to the parent class.<br />By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.</p>
        <h1>Arrow Functions</h1>
        <p className='text-warning'>Note: This works only if the function has only one statement.</p>
        <p>{hello()} <br /> {hello2()}</p>
        <h2>Arrow Function With Parameters:</h2>
        <p></p>
      </div>
    </>
  )
}

export default ReactES6
