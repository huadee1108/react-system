import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages/Layout'
import CustomerContact from '../pages/Account/CustomerContact';

const BasicRoute = () => (
    <HashRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Account/CustomerContact" component={CustomerContact}/>
        </Switch>
      </Layout>
    </HashRouter>
);


export default BasicRoute;