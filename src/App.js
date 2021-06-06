import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {

  const state = {
    counter: 0
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path='/' render={(props) => <Home test="123"/>} />
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
      </div>
    </BrowserRouter>
  );
}

export default App;
