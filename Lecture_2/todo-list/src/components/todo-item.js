import React from 'react';
import PropTypes from 'prop-types';


class TodoItem extends React.Component {
  render() {
    return <li>
      {this.props.todo}
    </li>
  }
}

TodoItem.propTypes = {
  todo: PropTypes.string
}

export default TodoItem
