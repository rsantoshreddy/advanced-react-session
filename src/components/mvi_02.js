import React from 'react';
import ReactDOM from 'react-dom';

export const mvic = () => {
  let model = {
    running: true,
    time: 0
  };

  const View = ({ time, running }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const formatterSeconds = `${seconds < 10 ? '0' : ''}${seconds}`;

    const actionHandler = () => {
      model = update(model, running ? 'STOP' : 'START');
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

  const render = () => {
    ReactDOM.render(<View {...model} />, document.getElementById('root'));
  };

  render();

  setInterval(() => {
    model = update(model, 'TICK');
    render();
  }, 1000);
};
