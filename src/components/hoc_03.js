import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: {
          userA: {
            name: 'Apple Khana'
          },
          userB: {
            name: 'Bus Jana'
          }
        }
      });
    }, 3000);
  }
  render() {
    const { data } = this.state;
    if (data) {
      const { userA } = data;
      return <p>{userA.name}</p>;
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: {
          userA: {
            name: 'Apple Khana'
          },
          userB: {
            name: 'Bus Jana'
          }
        }
      });
    }, 4000);
  }
  render() {
    const { data } = this.state;
    if (data) {
      const { userB } = data;
      return <p>{userB.name}</p>;
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export class App extends Component {
  render() {
    return (
      <div className='hoc'>
        <ComponentA />
        <ComponentB />
      </div>
    );
  }
}

const renderAppWithData = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

export default renderAppWithData;
