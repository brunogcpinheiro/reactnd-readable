import { RECEIVE_COMMENTS, DELETE_COMMENT } from '../actions/comments';

export default function (state = [], action) {
	switch (action.type) {
		case RECEIVE_COMMENTS:
			return action.comments;
		case DELETE_COMMENT:
			return state.filter(f => f.id !== action.id);
		default:
			return state;
	}
}
