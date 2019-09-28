import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

export const renderWithReducer = () => {
  const View = ({ time, running }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const formatterSeconds = `${seconds < 10 ? '0' : ''}${seconds}`;

    const actionHandler = () => {
      stateContainer.dispatch(running ? { type: 'STOP' } : { type: 'START' });
    };

    return (
      <div className='container'>
        <p>
          {minutes}:{formatterSeconds}
        </p>
        <button onClick={actionHandler}>{running ? 'Stop' : 'Start'}</button>
      </div>
    );
  };

  const update = (model = { running: false, time: 0 }, action = {}) => {
    const updates = {
      TICK: ({ time, running }) => ({ ...model, time: time + (running ? 1 : 0) }),
      START: model => ({ ...model, running: true }),
      STOP: model => ({ ...model, running: false })
    };
    return (updates[action.type] || (() => model))(model);
  };

  const render = () => {
    ReactDOM.render(<View {...stateContainer.getState()} />, document.getElementById('root'));
  };

  const stateContainer = createStore(update);
  stateContainer.subscribe(render);

  setInterval(() => {
    stateContainer.dispatch({ type: 'TICK' });
  }, 1000);
};
