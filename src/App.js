import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {v5 as uuid} from 'uuid';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';

import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: [

      // {
      //   id: uuid.v5,
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid.v5,
      //   title: 'do a thing',
      //   completed: false
      // },
      // {
      //   id: uuid.v5,
      //   title: 'Take out the trash again',
      //   completed: false
      // },
    ]
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}))
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
  Axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
   .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id
      !==id)] }));
}

//add Todo
addTodo = (title) => {
  Axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
    .then(res =>  this.setState({ todos: 
      [...this.state.todos, res.data] })
    );
}

  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
              <React.Fragment>
              <AddTodo addTodo = {this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} 
                delTodo = {this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
        
      </div>

      </Router>
      
    );
  }
  
}

export default App;
