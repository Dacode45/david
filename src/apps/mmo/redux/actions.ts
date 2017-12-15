export enum MMOActions {
    MMO_NOOP = 'MMO_NOOP'
}

export interface MMONoOp {
    type: MMOActions.MMO_NOOP;
}

export type MMOAction = MMONoOp;

export function mmoNoOp(): MMONoOp {
    return { type: MMOActions.MMO_NOOP };
}