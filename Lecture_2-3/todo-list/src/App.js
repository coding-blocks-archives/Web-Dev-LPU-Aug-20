import React from 'react';
import TodoItem from './components/todo-item';

function generateRandomId() {
  return Math.random().toString(36).substring(7);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const initialTodo = {
      id: generateRandomId(),
      content: 'Bring Apples',
      done: false
    }
    this.state = {
      todos: {
        [initialTodo.id]: initialTodo
      },
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
          const todo = {
            id: generateRandomId(),
            content: this.state.newTodo,
            done: false
          }
          this.setState({
            todos: {
              ...this.state.todos,
              [todo.id]: todo
            }
          })
        }}>
          Add Todo
        </button>

        <ol>
          {/* Data Down Action Up */}
          {Object.values(this.state.todos).map(todo => 
            <TodoItem 
              todo={todo} 
              onCompleted={() => {
                this.setState((prevState) => {
                  const completedTodo = prevState.todos[todo.id]
                  completedTodo['done'] = !completedTodo.done

                  return {
                    todos: {
                      ...prevState.todos,
                      [completedTodo.id]: completedTodo
                    }
                  }
                })
              }}
              onDelete={() => {
                this.setState((prevState) => {
                  const updatedTodos = prevState.todos
                  delete updatedTodos[todo.id]

                  return {
                    todos: updatedTodos
                  }
                })
              }}
            />
          )}
        </ol>
      </div>
    );
  }
}

export default App