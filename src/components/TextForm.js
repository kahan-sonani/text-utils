import React, { useState } from 'react'

export const TextForm = (props) => {
    const [text, setText] = useState('')

    const handleUppercaseClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleSentenceCaseClick = () => {
        let newText = text.toLowerCase().split(/\s+/).map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
        setText(newText);
    }
    const handleLowercaseClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleCopyToClipboard = (props) => {
        navigator.clipboard.writeText(text);
        props.onCopyToClipboardClicked('Copied to Clipboard!')
    }

    const lightStyle = {
        background: '#21252A',
        color: 'white'
    }

    const darkStyle = {
        background: 'white',
        color: 'black'
    }

    const printMinutesRead = () => {
        let strings = text.split(/\s+/)
        let result = 0.016 * strings.length
        if (result < 1)
            return `${parseInt(0.96 * strings.length)} seconds read`
        else
            return `${parseInt(result)} minutes read`
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className="container">
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3 mx-1">
                    <textarea style={props.mode === 'dark' ? lightStyle : darkStyle} value={text} onChange={handleOnChange} className='form-control resize-none' id='myBox' rows={10}></textarea>
                </div>
            </div>
            <div className='d-flex flex-wrap'>
                <button disabled={text.length === 0} className={`btn btn-${props.textMode} mx-3 mb-3 flex-fill`} onClick={handleUppercaseClick}>Convert: Upper Case</button>
                <button disabled={text.length === 0} className={`btn btn-${props.textMode} mx-3 mb-3 flex-fill`} onClick={handleLowercaseClick}>Convert: Lower Case</button>
                <button disabled={text.length === 0} className={`btn btn-${props.textMode} mx-3 mb-3 flex-fill`} onClick={handleSentenceCaseClick}>Convert: Sentence Case</button>
                <button disabled={text.length === 0} className={`btn btn-${props.textMode} mx-3 mb-3 flex-fill`} onClick={() => handleCopyToClipboard(props)}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className={`btn btn-${props.textMode} mx-3 mb-3 flex-fill`} onClick={() => setText('')}>Clear Text</button>
            </div>
            <div className='d-flex flex-wrap flex-row mx-2'>
                <div className={`card flex-grow-1 mx-2 my-2 bg-${props.mode}`}>
                    <div className=" card-body">
                        <h3>Preview</h3>
                        <p>{text}</p>
                    </div>
                </div>

                <div className={`card flex-grow-2 mx-2 my-2 bg-${props.mode}`}>
                    <div className=" card-body">
                        <h3>Your Text Summary</h3>
                        <p>{text === "" ? 0 : text.split(/\s+/).length} words and {text.length} characters</p>
                        <p>{printMinutesRead()}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


