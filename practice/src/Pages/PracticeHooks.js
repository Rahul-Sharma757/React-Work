import React from 'react'

function PracticeHooks() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('black');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Header NavbarBrand={"Brand1"} NavbarLink1={"React ES6"} NavbarLink2={"textForm"} NavbarLink3={"about"} toggleMode={toggleMode} mode={mode} />
    </>
  )
}

export default PracticeHooks
