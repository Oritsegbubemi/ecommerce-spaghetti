import { combineReducers } from 'redux';
import FoodReducer from './FoodReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import SignReducer from './SignReducer';

export default combineReducers({
    fReducer: FoodReducer,
    selectedLibraryId: SelectionReducer,
    auth: AuthReducer,
    sign: SignReducer,
});
