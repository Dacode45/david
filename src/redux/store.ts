import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer, { AppState, INITIAL_STATE } from './reducer';

const enhancers = [];
const middleware = [
    thunk,
];

if (process.env.NODE_ENV === 'development') {
    // tslint:disable-next-line:no-string-literal
    const devToolsExtension = window['devToolsExtension'];
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore<AppState>(reducer, INITIAL_STATE, composedEnhancers);
export default store;