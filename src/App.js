import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import { Router } from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';
import NavBar from './navbar';

const FourOhFour = () => <h1>404 Page Not Found</h1>;

const App = () => {
  const theme = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
            <FourOhFour default />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
