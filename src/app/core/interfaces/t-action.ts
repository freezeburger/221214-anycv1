export enum ActionType {
    LOGOUT_REQUEST = 'LOGOUT_REQUEST',

    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',

    NEWS_UPDATE  =   'NEWS_UPDATE',
    NEWS_SEARCH =   'NEWS_SEARCH'
}


export interface TAction {
    type:ActionType;
    payload:any;
}
