import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './home';
import About from './about';

const App = () => (
    <Fragment>
        <nav className="nav">
            <Link to="/">
                <span className="nav-link">Home</span>
            </Link>
            <Link to="/about">
                <span className="nav-link">About</span>
            </Link>
        </nav>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </main>
    </Fragment>
);

export default App;
