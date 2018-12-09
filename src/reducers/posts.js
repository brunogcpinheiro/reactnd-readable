import { RECEIVE_POSTS, CREATE_POSTS, DELETE_POST } from '../actions/posts';

export default function (state = [], action) {
	switch (action.type) {
		case RECEIVE_POSTS:
			return action.posts;
		case CREATE_POSTS:
			return [
				...state,
				{
					id: Math.random().toString(36).substr(-8),
					timestamps: Date.now(),
					...action.newPost,
				},
			];
		case DELETE_POST:
			return state.filter(post => post.id !== action.id);
		default:
			return state;
	}
}
