import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'do a thing',
        completed: false
      },
      {
        id: 3,
        title: 'Take out the trash again',
        completed: false
      },
    ]
  }

  // Toggle Complete
markComplete = (id) => {
  this.setState( { todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}

// delete Todo
delTodo = (id) => {
  this.setState({todos:[...this.state.todos.filter(todo => todo.id
    !==id)] });
}

//add Todo
addTodo = (title) => {
  const newTodo = {
    id: 4,
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] });
}

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo = {this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo = {this.delTodo} />
        </div>
        
      </div>
    );
  }
  
}

export default App;
