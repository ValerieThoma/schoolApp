import { combineReducers } from 'redux';

// import each individual reducer to hand to combineReducers
// first: AuthReducer
import AuthReducer from './AuthReducer';
import CoursesReducer from './CoursesReducer';



//combreducers takes an object as an argument, that arg has key:value pair ... will return a value
const rootReducer = combineReducers({	
	auth: AuthReducer,
	courses: CoursesReducer
});


export default rootReducer;