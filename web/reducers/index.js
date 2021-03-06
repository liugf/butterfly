import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as ActionTypes from '../actions'

function title(state = 'butterfly project', action) {
    switch (action.type) {
        case ActionTypes.CHANGE_TITLE:
            return action.title;
        default:
            return state;
    }
}

function titleSurfix(state = 'Coding.net') {
    return state;
}

const rootReducer = combineReducers({
    routing,
    title,
    titleSurfix
});

export default rootReducer;