import { combineReducers } from 'redux';
// Import the different reducers
import BooksReducer from './reducer_ books';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({   // combineReducers gathers the values of all child reducer and combines them into one single state object
  books: BooksReducer,                  // <-- here, the reducer adds a key (called 'books') to the global application state and the value will be whatever the reducer returns
  activeBook: ActiveBookReducer
})

export default rootReducer;