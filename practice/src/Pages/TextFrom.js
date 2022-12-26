import React, { useState } from 'react';
import Header from '../Components/Header';

export default function TextFrom(props) {

    const [text, setText] = useState('');
    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleDownClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleOnChange = (e) => { //to add new value in text area //
        setText(e.target.value);
    }
    // Clear Text 
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    // Set FontWeight
    const handleBoldText = () => {
        let boldText = document.getElementById('mybox2');
        boldText.style.fontWeight = 'bold';

    }
    // Set fontWeight 
    const handleLightText = () => {
        let boldText = document.getElementById('mybox2');
        boldText.style.fontWeight = '400';

    }
    // Copy all text //
    const handleCopy = () => {
        let cptxt = document.getElementById('mybox2');
        cptxt.select();
        navigator.clipboard.writeText(cptxt.value);
    }
    // Remove extra Space //
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [mode, setMode] = useState('light'); // whether dark mode is enable or not
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('black');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }
    return (
        <>
            <Header NavbarBrand={"Brand1"} NavbarLink1={"React ES6"} NavbarLink2={"textForm"} NavbarLink3={"about"} toggleMode={toggleMode} mode={mode} />
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <h1>{props.heading}</h1>
                        <div className="form-floating">
                            <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="mybox2" style={{ height: "500px" }}></textarea>
                            <label htmlFor="mybox">{props.textareaLabel}</label>
                        </div>
                        <button onClick={handleUpClick} className='btn btn-primary py-2 px-5 mt-4'>Convert text to uppercase</button>
                        <button onClick={handleDownClick} className='btn btn-warning py-2 px-5 mt-4 ms-3'>Convert text to lowercase</button>
                        <button onClick={handleClearClick} className='btn btn-dark py-2 px-5 mt-4 ms-3'>Clear Text</button>
                        <button onClick={handleBoldText} className='btn btn-dark py-2 px-5 mt-4'>Bold Text</button>
                        <button onClick={handleLightText} className='btn btn-dark py-2 px-5 mt-4 ms-3'>Light Text</button>
                        <button onClick={handleCopy} className='btn btn-primary py-2 px-5 mt-4 ms-3'>Copy Text</button>
                        <button onClick={handleExtraSpace} className='btn btn-primary py-2 px-5 mt-4 ms-3'>Remove Extra Space</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

    )
}