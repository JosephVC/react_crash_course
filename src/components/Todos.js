import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  markComplete = () => {
      console.log('hello')
  }
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key = {todo.id} todo={todo} markComplete=
      {this.props.markComplete} />
    ));
  } 
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
