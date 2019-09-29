import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class ComponentA extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>I'm ComponentA</p>
      </div>
    );
  }
}
export class ComponentB extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>I hope you have seen A, I'm ComponentB</p>
      </div>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div className='hoc'>
        <ComponentA title='A for Apple'></ComponentA>
        <ComponentB title='B for Bus'></ComponentB>
      </div>
    );
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

export default renderApp;
