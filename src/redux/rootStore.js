import {combineReducers, createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import TaskReducer from './store/taskReducer';
import ProductCartReducer from './store/productReducer';
import GameReducer from './store/gameReducer';
import MailReducer from './store/mailReducer';

const rootReducer = combineReducers({
    TaskReducer,
    ProductCartReducer,
    GameReducer,
    MailReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;