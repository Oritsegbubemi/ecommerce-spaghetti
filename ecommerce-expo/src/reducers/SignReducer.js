import { SIGNUP_EMAIL_CHANGED, 
    SIGNUP_PASSWORD_CHANGED, 
    SIGNUP_USER_SUCCESS, 
    SIGNUP_USER_FAIL,
    SIGNUP_USER } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP_EMAIL_CHANGED: 
            return { ...state, email: action.payload };
        case SIGNUP_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case SIGNUP_USER_SUCCESS:
            return {
                 ...state, 
                user: action.payload, 
                error: '', 
                loading: false, 
                email: '', 
                password: '' 
            };
        case SIGNUP_USER_FAIL:
            return { 
                ...state, 
                error: 'Authentication Failed. Check Your Connection', 
                password: '', 
                loading: false 
            };
        case SIGNUP_USER:
            return { ...state, loading: true, error: '' };
        default: 
            return state;
    }
};
