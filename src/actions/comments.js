import { getComments, deleteComment } from '../utils/api';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';

function receiveComments (comments) {
	return {
		type: RECEIVE_COMMENTS,
		comments,
	};
}

export function handleGetComments (id) {
	return dispatch => {
		return getComments(id).then(comments => {
			dispatch(receiveComments(comments));
		});
	};
}

function deleteCommentFunc (id) {
	return {
		type: DELETE_COMMENT,
		id,
	};
}

export function handleDeleteComment (id) {
	return dispatch => {
		return deleteComment(id).then(() => {
			dispatch(deleteCommentFunc(id));
		});
	};
}
