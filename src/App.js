import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      items: [
	   {
		   id: 1,
		   name: 'Today todo'},
	   {
		   id: 2,
		   name: 'Tomorrow todo'}
	  ]
    };
  }
  onChange = (event) => {
    this.setState({ name: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
	if (this.state.name !== "") {
	  var newTodo = {
		id: Date.now(),
		name: this.state.name
	  }		
	  this.setState({
	    items: [...this.state.items, newTodo],
		name: ''		  
	  });
	}
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} onChange={this.onChange} name={this.state.name} />
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
