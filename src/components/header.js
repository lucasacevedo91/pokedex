import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Game from '../pages/games';
import Home from '../pages/home';
import Pokedex from '../pages/pokedex';

const Header = () => {
    return (
        <Router>
            <nav    className='navbar navbar-expand-md navbar-dark bg-dark m2 text-light' 
                    style={{color: 'white!important'}}
            >
                <Link className="navbar-brand text-light" to="/">Home</Link>
                <Link className='nav-link text-light' to='/games'>Games</Link>
                <Link className="nav-link text-light" to='/pokedex'>Pokedex</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/games' component={ Game } />
                <Route exact path="/pokedex" component={Pokedex} />
            </Switch>
        </Router>
    );
}

export default Header;