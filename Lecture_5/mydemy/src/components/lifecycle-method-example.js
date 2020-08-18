import React from 'react';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jatin'
    }

    console.log('constructor called');
  }

  componentDidMount() {
    console.log('did mount called')
  }

  componentDidUpdate() {
    console.log('did update called')
  }

  componentDidCatch() {

  }

  render() {
    console.log('render called');
    return <div id="something">
      <h1>Hello World</h1>
      <button onClick={() => {
        this.setState({
          name: 'wat'
        })
      }}>
        Click Me
      </button>
    </div>
  }
}

export default Explore;
