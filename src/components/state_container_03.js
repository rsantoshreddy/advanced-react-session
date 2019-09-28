import React from 'react';
import ReactDOM from 'react-dom';

export const renderWithStateContainer = () => {
  let model = {
    running: false,
    time: 0
  };

  const View = ({ time, running }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const formatterSeconds = `${seconds < 10 ? '0' : ''}${seconds}`;

    const actionHandler = () => {
      stateContainer.dispatch(running ? 'STOP' : 'START');
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

  const update = (model, intent) => {
    const updates = {
      TICK: ({ time, running }) => ({ ...model, time: time + (running ? 1 : 0) }),
      START: model => ({ ...model, running: true }),
      STOP: model => ({ ...model, running: false })
    };
    return updates[intent](model);
  };

  const createStore = (intialState, reducer) => {
    let internalState = intialState || {};
    const actionHandlers = [];
    return {
      dispatch: action => {
        internalState = reducer(internalState, action);
        actionHandlers.forEach(h => h());
      },
      subscribe: handler => {
        actionHandlers.push(handler);
      },
      getState: () => internalState
    };
  };

  const render = () => {
    ReactDOM.render(<View {...stateContainer.getState()} />, document.getElementById('root'));
  };

  const stateContainer = createStore(model, update);
  stateContainer.subscribe(render);

  setInterval(() => {
    stateContainer.dispatch('TICK');
  }, 1000);
};
