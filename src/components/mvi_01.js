import React from 'react';
import ReactDOM from 'react-dom';

export const mvi = () => {
  let model = {
    running: false,
    time: 0
  };

  const View = ({ time }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const formatterSeconds = `${seconds < 10 ? '0' : ''}${seconds}`;
    return (
      <div>
        {minutes}:{formatterSeconds}
      </div>
    );
  };

  const update = (model, intent) => {
    const updates = {
      TICK: model => Object.assign({}, { time: model.time + 1 })
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
