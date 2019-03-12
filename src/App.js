import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Jake" animal="Cat" breed="Boss" />
      <Pet name="Tata" animal="Dog" breed="Boxer" />
      <Pet name="Yaya" animal="Dog" breed="French Puddle" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
