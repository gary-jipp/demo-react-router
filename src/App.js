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

        {/* Any state used by pages needs to be in the parent of Routes */}
        
        <Route exact path='/' render={(props) => <Home {...props} test="123" />} />
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />

        {/* React Router 4/5 */}
        <Route path="/dashboard" render={(props) => <Page2 {...props} test={true} />} />

        {/* React Router 6 - better */}
        {/* <Route path="/dashboard" element={<Page2 test={true} />} /> */}

      </div>

    </BrowserRouter>
  );
}

export default App;
