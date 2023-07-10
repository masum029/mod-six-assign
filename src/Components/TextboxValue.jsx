
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
        <h1>Title</h1>
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
    console.log('Input value:', value);
  };

  return (
    <div>
      <h1>Title</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Display Value</button>
      <p>You entered: </p>
    </div>
  );
}

export default MyComponent;
