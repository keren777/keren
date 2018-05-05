import React from 'react';
import '../assets/index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation';
// import Footer from './Footer'

import Home from './Home'
import Contact from './Contact'

const App = () => (
    <Router>
        <div>
            <Navigation/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </div>
    </Router>
);


export default App;