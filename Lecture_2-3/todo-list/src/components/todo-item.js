import React from 'react';
import PropTypes from 'prop-types';


class TodoItem extends React.Component {
  render() {
    return <li>
      {this.props.todo.content}
      <button onClick={this.props.onCompleted}>
        {this.props.todo.done ? "Undone" : "Done" }
      </button>
      <button onClick={this.props.onDelete}>Delete</button>
    </li>
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onCompleted: PropTypes.func,
  onDelete: PropTypes.func
}

export default TodoItem
