import React, { useEffect } from 'react';
import './App.css';
import "./Header.css"
import Home from './Home';
import Header from './Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';

function App() {
    return (
        <Router>
            <div className="app">
            <Header />
                <Switch>
                    <Route path="/checkout" >
                        <Checkout/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
