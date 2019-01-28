import {
	RECEIVE_POSTS,
	CREATE_POSTS,
	DELETE_POST,
	VOTE_POST,
} from '../actions/posts';

export default function (state = [], action) {
	switch (action.type) {
		case RECEIVE_POSTS:
			return action.posts;
		case CREATE_POSTS:
			return [
				...state,
				{
					...action.newPost,
				},
			];
		case DELETE_POST:
			return state.filter(post => post.id !== action.id);
		case VOTE_POST:
			return state.map(
        		(post) => post.id === action.post.id ? action.post : post );
		default:
			return state;
	}
}
