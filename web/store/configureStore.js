import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
    titleSurfix:'coding.net'
};

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
};