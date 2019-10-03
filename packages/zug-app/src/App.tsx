import React from 'react';
import './App.css';

import Login from './base/login/index'
import Head from './common/head/index'

import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'


const About = () => <h3>About</h3>

const Inbox = () => <div>
    <h2>Inbox</h2>
    Welcome to your Inbox
</div>



const Message = () => <h3>Message</h3>

const App: React.FC = ({children}) => {
  return (
    <Router>
    <div className="App">
      <Login></Login>
      <Head>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/inbox">
            <Inbox />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          
          <Route path="/">
            Nothing
          </Route>
        </Switch>
      </Head>
      
    </div>
    
    </Router>
  );
}

export default App;
