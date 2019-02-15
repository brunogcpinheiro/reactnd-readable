import {
	RECEIVE_COMMENTS,
	CREATE_COMMENTS,
	EDIT_COMMENT,
	DELETE_COMMENT,
	VOTE_COMMENT
} from '../actions/comments';

export default function (state = [], action) {
	switch (action.type) {
		case RECEIVE_COMMENTS:
			return [ ...action.comments ];
		case CREATE_COMMENTS:
			return [
				...state,
				{
					...action.newComment,
				},
			];
		case EDIT_COMMENT:
			return state.map(comment => comment.id === action.editedComment.id
	        ?  {...comment, ...action.editedComment }
	        : comment);
		case DELETE_COMMENT:
			return state.filter(f => f.id !== action.id);
		case VOTE_COMMENT:
			return state.map(comment => comment.id === action.comment.id ? action.comment : comment);
		default:
			return state;
	}
}
