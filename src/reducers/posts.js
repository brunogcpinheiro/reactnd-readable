import {
	RECEIVE_POSTS,
	CREATE_POSTS,
	DELETE_POST,
	VOTE_POST,
	DECREMENT_COMMENTS,
	INCREMENT_COMMENTS
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
        case DECREMENT_COMMENTS:
	      return state.map(post => post.id === action.postId
	        ?  {...post, commentCount: post.commentCount - 1}
	        : post);
	
	    case INCREMENT_COMMENTS:
	      return state.map(post => post.id === action.postId
	        ?  {...post, commentCount: post.commentCount + 1}
	        : post);
		default:
			return state;
	}
}
