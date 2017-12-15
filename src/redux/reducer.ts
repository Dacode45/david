import { combineReducers } from 'redux';
import MMOReducer, { MMOState, INITIAL_STATE as mmo } from '../apps/mmo/redux/reducer';

export interface AppState {
    mmo: MMOState;
} 

export const INITIAL_STATE = {
    mmo,
};

export default combineReducers<AppState>({
    mmo: MMOReducer,
});