import React, { useState } from 'react'
import Header from '../Components/Header'

function About() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [accordionBtnStyle, setAccordionBtnStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setAccordionBtnStyle({ color: ('white'), backgroundColor: ('black') });
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setAccordionBtnStyle({ color: ('black'), backgroundColor: ('white') });
    }
  }
  return (
    <>
      <Header NavbarBrand={"Brand1"} NavbarLink1={"React ES6"} NavbarLink2={"textForm"} NavbarLink3={"about"} toggleMode={toggleMode} mode={mode} />
      <div className='container-fluid py-5'>
        <div className="container">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tortor elementum sapien facilisis <br /> gravida pretium vitae odio. Etiam sollicitudin rhoncus semper. Donec dictum faucibus nibh, quis pretium libero. <br /> Donec sed finibus dolor,
            et semper ex. Vivamus luctus enim ut vehicula semper. Sed dolor lorem, pulvinar a aliquam <br /> ut, bibendum ut nisi. Sed condimentum condimentum ante, et tristique tellus ultrices id.
          </p>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" style={accordionBtnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" style={accordionBtnStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={accordionBtnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" style={accordionBtnStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={accordionBtnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" style={accordionBtnStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
