import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class ComponentA extends Component {
  render() {
    return <p>I'm ComponentA</p>;
  }
}
export class ComponentB extends Component {
  render() {
    return <p>I hope you have seen A, I'm ComponentB</p>;
  }
}

export const WithTitle = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export class App extends Component {
  render() {
    return (
      <div className='hoc'>
        <WithTitle title='A for Apple'>
          <ComponentA></ComponentA>
        </WithTitle>
        <WithTitle title='B for Bus'>
          <ComponentB></ComponentB>
        </WithTitle>
      </div>
    );
  }
}

const renderAppWithHOC = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

export default renderAppWithHOC;
