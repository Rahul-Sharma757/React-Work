import React, { useState } from 'react';

export default function TextFrom(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handleDownClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to lowercase", "success")
    }

    const handleOnChange = (e) => { //to add new value in text area //
        setText(e.target.value);
    }
    // Clear Text 
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }
    // Set FontWeight
    const handleBoldText = () => {
        let boldText = document.getElementById('mybox2');
        boldText.style.fontWeight = 'bold';
        props.showAlert("Converted to Bold", "success")
    }
    // Set fontWeight 
    const handleLightText = () => {
        let boldText = document.getElementById('mybox2');
        boldText.style.fontWeight = '400';
        props.showAlert("Converted to Normal Font", "success")

    }
    // Copy all text //
    const handleCopy = () => {
        let cptxt = document.getElementById('mybox2');
        cptxt.select();
        navigator.clipboard.writeText(cptxt.value);
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to clipboard", "success")
    }
    // Remove extra Space //
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed", "success");
    }
    return (
        <>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <h1>{props.heading}</h1>
                        <div className="form-floating">
                            <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="mybox2" style={{ height: "500px" }}></textarea>
                            <label htmlFor="mybox">{props.textareaLabel}</label>
                        </div>
                        <button disabled={text.length === 0} onClick={handleUpClick} className='btn btn-primary py-2 px-5 mt-4'>Convert text to uppercase</button>
                        <button disabled={text.length === 0} onClick={handleDownClick} className='btn btn-warning py-2 px-5 mt-4 ms-3'>Convert text to lowercase</button>
                        <button disabled={text.length === 0} onClick={handleClearClick} className='btn btn-dark py-2 px-5 mt-4 ms-3'>Clear Text</button>
                        <button disabled={text.length === 0} onClick={handleBoldText} className='btn btn-dark py-2 px-5 mt-4 ms-3'>Bold Text</button>
                        <button disabled={text.length === 0} onClick={handleLightText} className='btn btn-dark py-2 px-5 mt-4 ms-3'>Light Text</button>
                        <button disabled={text.length === 0} onClick={handleCopy} className='btn btn-primary py-2 px-5 mt-4 ms-3'>Copy Text</button>
                        <button disabled={text.length === 0} onClick={handleExtraSpace} className='btn btn-primary py-2 px-5 mt-4 ms-3'>Remove Extra Space</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((ele) => { return ele.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>

    )
}