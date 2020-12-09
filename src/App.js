import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Adam', age: 26 },
      { name: 'Mona', age: 26 },
      { name: 'Max', age: 28 },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Adam', age: 26 },
        { name: 'Mona', age: 26 },
        { name: newName, age: 28 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Adam', age: 26 },
        { name: 'Mona', age: 26 },
        { name: event.target.value, age: 28 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler('Adam #2')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Adam #1')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Running
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Mona #1')}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Max #1')}
        />
      </div>
    );
    /*     return React.createElement(
      'div',
      null,
      React.createElement('h1', { className: 'App' }, 'Does this work now?')
    ); */
  }
}

export default App;
