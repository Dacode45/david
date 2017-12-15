import { Record } from 'immutable';

let uiSidebar = Record({
    tab: 1,
});

export class UISidebar extends uiSidebar {
    tab: number;
}

export const UISIDEBAR_INITIAL_STATE = new UISidebar();

let uiState = Record({
    sidebar: UISIDEBAR_INITIAL_STATE,
});

class UIState extends uiState {
    sidebar: UISidebar;
}

export const UISTATE_INITIAL_STATE = new UIState();

export default UIState;