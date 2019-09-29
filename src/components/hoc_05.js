import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class GenericComponent extends Component {
  render() {
    const { user } = this.props;
    return <p>{user.name}</p>;
  }
}

export const withSubscription = mapStateToProps => {
  const data = {
    userA: {
      name: 'Apple Khana'
    },
    userB: {
      name: 'Bus Jana'
    }
  };
  return WrappedComponent => {
    return <WrappedComponent {...mapStateToProps(data)} />;
  };
};

const mapStateToProps = state => {
  return {
    user: state.userA
  };
};

const A = withSubscription(mapStateToProps)(GenericComponent);

export class App extends Component {
  render() {
    return <div className='hoc'>{A}</div>;
  }
}

const renderReducedComponent = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

export default renderReducedComponent;
