import { LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_EMAIL_CHANGED: 
            return { ...state, email: action.payload };
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { 
                ...state, 
                user: action.payload, 
                error: '', 
                loading: false, 
                email: '', 
                password: '' 
            };
        case LOGIN_USER_FAIL:
            return {
                 ...state, 
                error: 'Authentication Failed. Check Your Connection', 
                password: '', 
                loading: false 
            };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default: 
            return state;
    }
};
