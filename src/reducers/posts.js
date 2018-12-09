import { RECEIVE_POSTS, DELETE_POST } from '../actions/posts';

export default function (state = [], action) {
	switch (action.type) {
		case RECEIVE_POSTS:
			return action.posts;
		case DELETE_POST:
			return state.filter(post => post.id !== action.id);
		default:
			return state;
	}
}
