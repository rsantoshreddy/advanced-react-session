import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

export const renderWithReactRedux = () => {
  const mapStateToProps = state => {
    return { ...state };
  };

  const mapDispatchToProps = dispatch => {
    return {
      onStart: () => {
        dispatch({ type: 'START' });
      },
      onStop: () => {
        dispatch({ type: 'STOP' });
      }
    };
  };

  const View = connect(
    mapStateToProps,
    mapDispatchToProps
  )(props => {
    const { time, running, onStart, onStop } = props;
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const formatterSeconds = `${seconds < 10 ? '0' : ''}${seconds}`;

    return (
      <div className='container'>
        <p>
          {minutes}:{formatterSeconds}
        </p>
        <button onClick={running ? onStop : onStart}>{running ? 'Stop' : 'Start'}</button>
      </div>
    );
  });

  const update = (model = { running: false, time: 0 }, action = {}) => {
    const updates = {
      TICK: ({ time, running }) => ({ ...model, time: time + (running ? 1 : 0) }),
      START: model => ({ ...model, running: true }),
      STOP: model => ({ ...model, running: false })
    };
    return (updates[action.type] || (() => model))(model);
  };

  const stateContainer = createStore(update);

  ReactDOM.render(
    <Provider store={stateContainer}>
      <View />
    </Provider>,
    document.getElementById('root')
  );

  setInterval(() => {
    stateContainer.dispatch({ type: 'TICK' });
  }, 1000);
};
