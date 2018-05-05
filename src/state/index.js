
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const reducers = {
    rootReducer,
    form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    composeWithDevTools()
);

export default store;
