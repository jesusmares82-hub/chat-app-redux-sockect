import { combineReducers } from 'redux';
import themeReducer from './config_themeReducer';
import chatReducer from './config_chatReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    chat: chatReducer,
})

export default rootReducer;