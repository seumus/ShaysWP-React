  
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
// import Posts from './posts';
// import Post from './post';
// import Products from './products';
// import Product from './product';
// import Page from './page';

// Load the Sass file
import './scss/main.scss';

const App = () => (
    <div id="page-inner">
        <Header />
        <main id="content">
            {/* <Switch>
                <Route exact path={ShaysWP_React_Settings.path} component={Posts} />
                <Route exact path={ShaysWP_React_Settings.path + 'posts/:slug'} component={Post} />
                <Route exact path={ShaysWP_React_Settings.path + 'products'} component={Products} />
                <Route exact path={ShaysWP_React_Settings.path + 'products/:product'} component={Product} />
                <Route exact path={ShaysWP_React_Settings.path + ':slug'} component={Page} />
            </Switch> */}
        </main>
        <Footer />
    </div>
);

// Routes
const routes = (
    <Router>
        <Route path="/" component={App} />
    </Router>
);

render(
    (routes), document.getElementById('page')
);