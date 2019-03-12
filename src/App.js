import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Jake',
      animal: 'Cat',
      breed: 'Boss'
    }),
    React.createElement(Pet, {
      name: 'Tata',
      animal: 'Dog',
      breed: 'Boxer'
    }),
    React.createElement(Pet, {
      name: 'Yaya',
      animal: 'Dog',
      breed: 'French Puddle'
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
