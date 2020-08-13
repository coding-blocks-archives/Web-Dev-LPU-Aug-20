import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['bring apples', 'bring baNaNa']
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List Application</h1>

        <input type="text" placeholder="Todo" />
        <button>Add Todo</button>

        <ol>
          {this.state.todos.map(todo => <li>
            {todo}
          </li>)}
        </ol>
      </div>
    );
  }
}

export default App