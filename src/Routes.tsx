import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingComponent from './components/LoadingComponent';

const AsyncHome = Loadable({ 
    loader: () => import('./components/Home'),
    loading: LoadingComponent,
});

const AsyncMMO = Loadable({
    loader: () => import('./apps/mmo/components/Main'),
    loading: LoadingComponent,
});

export default () => (
    <Switch>
        <Route path="/" exact component={AsyncHome}/>
        <Route path="/mmo" component={AsyncMMO} />
    </Switch>
);