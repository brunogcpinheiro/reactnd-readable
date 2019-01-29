import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import post from './post';
import comments from './comments';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
	posts,
	categories,
	post,
	comments,
	loadingBar: loadingBarReducer
});
