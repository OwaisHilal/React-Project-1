import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('uppercase clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to uppercase', 'success');
  };

  const handleLoClick = () => {
    console.log('lowercase clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lowercase', 'success');
  };
  const handleOnChange = (event) => {
    console.log('on change');
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    console.log('Clear');
    let newText = '';
    setText(newText);
    props.showAlert('text cleared', 'success');
  };

  const [text, setText] = useState('');
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-5">
        <h1>your text summary</h1>
        <p>
          {text.split(' ').length} words, {text.length}charecters, time to read{' '}
          {0.008 * text.split(' ').length}Minutes
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
