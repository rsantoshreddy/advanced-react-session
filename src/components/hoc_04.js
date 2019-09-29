import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class ComponentA extends Component {
  render() {
    const { userA } = this.props;
    return <p>{userA.name}</p>;
  }
}

export class ComponentB extends Component {
  render() {
    const { userB } = this.props;
    return <p>{userB.name}</p>;
  }
}

export const withSubscription = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }
    componentDidMount() {
      const data = {
        userA: {
          name: 'Apple Khana'
        },
        userB: {
          name: 'Bus Jana'
        }
      };
      setTimeout(() => {
        this.setState({
          data
        });
      }, 3000);
    }

    render() {
      const { data } = this.state;
      if (data) {
        return <WrappedComponent {...data} />;
      } else {
        return <h1>Loading...</h1>;
      }
    }
  };
};

const A = withSubscription(ComponentA);
const B = withSubscription(ComponentB);

export class App extends Component {
  render() {
    return (
      <div className='hoc'>
        <A />
        <B />
      </div>
    );
  }
}

const renderAppWithHOCData = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

export default renderAppWithHOCData;
