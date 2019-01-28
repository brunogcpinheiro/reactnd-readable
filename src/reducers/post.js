import { RECEIVE_POST } from '../actions/post';
import { DELETE_POST } from '../actions/posts';

export default function (state = [], action) {
	switch (action.type) {
		case RECEIVE_POST:
			return {
				...action.post,
			};
		case DELETE_POST:
			return action.id;
		default:
			return state;
	}
}
