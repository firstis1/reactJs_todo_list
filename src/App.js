import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
	  buttonName: 'Add Todo',
	  editId: 0,
      items: [
	   {
		   id: 1,
		   name: 'Today todo',
		   disabledFeatures: false},
	   {
		   id: 2,
		   name: 'Tomorrow todo',
		   disabledFeatures: false}
	  ]
    };
	this.editTodo = this.editTodo.bind(this);
	this.deleteTodo = this.deleteTodo.bind(this);
  }
  onChange = (event) => {
    this.setState({ name: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
	if (this.state.name !== "") {
		if (this.state.buttonName === "Add Todo"){
			var newTodo = {
				id: Date.now(),
				name: this.state.name,
				disabledFeatures: false
			}
			this.setState({
				items: [...this.state.items, newTodo],
				name: ''		  
			});
		} else {		
			var itemsEdited = this.state.items;
			var index = itemsEdited.findIndex(x => x.id === this.state.editId);
			itemsEdited[index].name = this.state.name;
			itemsEdited[index].disabledFeatures = false;			
			this.setState({
				items: itemsEdited,
				name: '',
				editId: 0,
				buttonName: 'Add Todo'
			});
		}	 
	  
	}
  }
  editTodo(id) {
	var index = this.state.items.findIndex(x => x.id === id);
	if (index === -1) {
		this.setState({
			name: '',
			editId: 0,
			buttonName: 'Add Todo'
		});
    } else {
		var itemsModified = this.state.items;
		for (var i=0; i < itemsModified.length; i++) {
			if (index === i){
				itemsModified[i].disabledFeatures = true;
			} else {
				itemsModified[i].disabledFeatures = false;
			}
		}		
		this.setState({
			items: itemsModified,
			name: this.state.items[index].name,
			editId: this.state.items[index].id,
			buttonName: 'Save Todo'
		}); 
    }
  }  
  deleteTodo(id) {
	  var filteredItems = this.state.items.filter(function (item) {
	    return (item.id !== id);
	  });
	 
	  this.setState({
	    items: filteredItems
	  });
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} onChange={this.onChange} name={this.state.name} buttonName={this.state.buttonName} />
        <List items={this.state.items} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
