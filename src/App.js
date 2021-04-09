import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavList from './components/Nav/NavList';

import About from './pages/About';
import Blog from './pages/Blog';
import FullPost from './components/Blog/FullPost';
import Contact from './pages/Contact';
import Error from './pages/Error';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main className="App-main">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:postTitle" component={FullPost} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/404" component={Error} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
