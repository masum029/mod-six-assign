
import React, { useRef,useState } from 'react';


function MyComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Title</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>You entered: {inputValue}</p>
    </div>
  );
}


// Using a class component and handling state:

class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Enter your comments below</h1>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <p>You entered: {this.state.inputValue}</p>
      </div>
    );
  }
}




function MyComponent2() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    const value = inputRef.current.value;
    document.getElementById('txtArea').innerHTML=value;
    console.log('Input value:', value);
  };

  return (
    <div>
      <h1>Title</h1>
      <textarea type="text" ref={inputRef} />
      <button className='btn btn-success' onClick={handleButtonClick}>Display Value</button>
      <p id='txtArea'>You entered text will display here!!!!!!!!!!!</p>
    </div>
  );
}



function ButtonClick() {
  
  const handleButtonClick = () => {
    // const value = document.getElementById('txtAreaVal').value;
    // document.getElementById('txtArea').innerHTML=value;
    // console.log('Input value:', value);
    const value = document.getElementById('txtAreaVal').value;
    document.getElementById('txtArea').textContent = value;
    console.log('Input value:', value);
  };

  return (
    <div>
      {/* <h4>Enter your comments below Text Area</h4>
      <textarea className="form-control" rows="2"></textarea>
      <button className='btn btn-success right' onClick={handleButtonClick}>Display Value</button>
      <p id='txtArea' >You entered text will display here!!!!!!!!!!!</p> */}

<div>
        <h4>Enter your comments below:</h4>
        <textarea id="txtAreaVal" className="form-control" rows="2"></textarea>
        <button className='btn btn-success' onClick={this.handleButtonClick}>Display Value</button>
        <p id='txtArea'>You entered text will display here!!!!!!!!!!!</p>
      </div>
    </div>
  );
}


//import React, { useRef, useState } from 'react';

const ButtonClick2 = () => {
  const textareaRef = useRef(null);
  const [displayedValue, setDisplayedValue] = useState('You entered text will display here!!!!!!!!!!!');

  const handleButtonClick = () => {
    const value = textareaRef.current.value;
    setDisplayedValue(value);
    console.log('Input value:', value);
  };

  return (
    <div className='text-right'>
      <h4>Enter your comments below:</h4>
      <textarea ref={textareaRef} className="form-control" rows="2" placeholder="Type your comment here"></textarea>
      <br/>
      <button className='btn btn-success end' onClick={handleButtonClick}>Display Value</button>
      <p className="displayed-text">{displayedValue}</p>
    </div>
  );
};



 class ButtonClick4 extends React.Component {
  //const ButtonClick4 =()=>{
  handleButtonClick() {
    const value = document.getElementById('txtAreaVal').value;
    document.getElementById('txtArea').textContent = value;
    console.log('Input value:', value);
  }

  render() {
    return (
      <div>
        <h4>Enter your comments below:</h4>
        <textarea id="txtAreaVal" className="form-control" rows="2"></textarea>
        <button className='btn btn-success' onClick={this.handleButtonClick}>Display Value</button>
        <p id='txtArea'>You entered text will display here!!!!!!!!!!!</p>
      </div>
    );
  }
}

export default ButtonClick2;



