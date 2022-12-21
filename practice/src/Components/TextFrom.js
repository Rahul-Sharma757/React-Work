import React, { useState } from 'react';

export default function TextFrom(props) {

    const [text, setText] = useState('Enter text here');
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

    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <h1>{props.heading}</h1>
                    <div className="form-floating">
                        <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="mybox2" style={{height: "500px"}}></textarea>
                        <label htmlFor="mybox">{props.textareaLabel}</label>
                    </div>
                    <a href='/#' onClick={handleUpClick} className='btn btn-primary py-2 px-5 mt-4'>Convert text to uppercase</a>
                    <a href='/#' onClick={handleDownClick} className='btn btn-warning py-2 px-5 mt-4 ms-3'>Convert text to lowercase</a>
                </div>
            </div>
        </div>
    )
}