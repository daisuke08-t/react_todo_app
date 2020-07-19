import React from 'react';
import './App.css';


const todos = [
  {id: 0, title: 'Task 0', isDone: false},
  {id: 1, title: 'Task 1', isDone: false},
  {id: 2, title: 'Task 2', isDone: true},
  ];
  
function TodoList(props) {
  const todos = props.todos.map(todo => {
    return(
      <li key={todo.id}>{todo.title}</li>
      );
  });
  return(
    <ul>
      {todos}
    </ul>
    );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }
  render() {
    return(
      <div>
        <h1>My todo</h1>
        <TodoList todos={this.state.todos}/>
      </div>
      );
  }
}

export default App;