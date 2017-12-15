import { Record } from 'immutable';
import { MMOAction, MMOActions } from './actions';

import UIState, { UISTATE_INITIAL_STATE } from '../models/ui';

let mmoRecord = Record({
    pendingInput: '',
    ui: UISTATE_INITIAL_STATE,
});

export class MMOState extends mmoRecord {
    pendingInput: string;
    ui: UIState;
}

export const INITIAL_STATE = new MMOState();

export default function reducer(state: MMOState = INITIAL_STATE, action: MMOAction): MMOState {
    switch (action.type) {
        case MMOActions.MMO_NOOP:
            return state;
        default: 
            return state;
    }
}