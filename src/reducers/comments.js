import { RECEIVE_COMMENTS } from '../actions/comments';

export default function (state = {}, action) {
	switch (action.type) {
		case RECEIVE_COMMENTS:
			return action.comments;
		default:
			return state;
	}
}
