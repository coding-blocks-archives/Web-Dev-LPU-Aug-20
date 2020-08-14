import React from 'react';
import TodoItem from './components/todo-item';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['bring apples', 'bring baNaNa'],
      newTodo: '',
      name: 'Jatin Katyal'
    }
  }
  
  render() {
    return (
      <div>
        <h1>Todo List Application made by {this.state.name}</h1>
        <input 
          type="text" 
          placeholder="Todo" 
          value={this.state.newTodo}
          onChange={(event) => {
            const value = event.target.value
            this.setState({
              newTodo: value
            })
          }}
        />
        <button onClick={() => {
          this.setState({
            todos: [...this.state.todos, this.state.newTodo]
          })

          // this.setState((prevState) => {
          //   const newTodos = prevState.todos.remove(1)
          //   return {
          //     todos: newTodos
          //   }
          // })
        }}>
          Add Todo
        </button>

        <ol>
          {this.state.todos.map(todo => <TodoItem todo={todo} />)}
        </ol>
      </div>
    );
  }
}

export default App