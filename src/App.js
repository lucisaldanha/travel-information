import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      firstName: '', 
      lastName: '', 
      isFriendly: false, 
      textArea: 'Once upon a time...', 
      gender: '',
      favColor: 'blue'
    };
    this.handleChange= this.handleChange.bind(this);
  }
  handleChange(event) {
    const {name, value, type, checked}= event.target;
    type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({ [name]: value });
  };


  render() {
    return (
      <form >
        <input 
          type='text' 
          value= {this.state.firstName}
          name='firstName'
          placeholder='First Name' 
          onChange={this.handleChange} 
        />
        <br />
        <input 
          type='text' 
          value= {this.state.lastName}
          name='lastName'
          placeholder='Last Name' 
          onChange={this.handleChange} 
        />
        <br />
        <textarea 
          name= 'textArea'
          value={this.state.textArea} 
          onChange={this.handleChange}
          />
        <br />
        <label> 
          <input 
            type='checkbox'  
            name='isFriendly'
            checked={this.state.isFriendly} 
            onChange={this.handleChange}
          /> Is Friendly?
        </label> 
        <br />
        <label> 
          <input 
            type='radio'  
            name='gender'
            value='male'
            checked={this.state.gender === 'male'} 
            onChange={this.handleChange}
          /> Male
        </label> 
        <br />
        <label> 
          <input 
            type='radio'  
            name='gender'
            value='female'
            checked={this.state.gender === 'female'} 
            onChange={this.handleChange}
          /> Female
        </label> 
        <br />
        <label> Your favorite color is:
          <select 
            name='favColor'
            value={this.state.favColor}
            onChange={this.handleChange}
          >
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
            <option value='pink'>Pink</option>
          </select>
        </label> 
        <p>{this.state.firstName} {this.state.lastName}</p>
        <p>You are a {this.state.gender}.</p>
        <p>So your favorite color is: {this.state.favColor}.</p>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
