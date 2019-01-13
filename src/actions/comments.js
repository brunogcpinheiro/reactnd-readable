import { getComments, createComments, deleteComment } from '../utils/api';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const CREATE_COMMENTS = 'CREATE_COMMENTS';
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

function createCommentsFunc (newCommentObj) {
	return {
		type: CREATE_COMMENTS,
		newCommentObj,
	};
}

export function handleCreateComments (comment) {
	return dispatch => {
		return createComments(comment).then(newCommentObj => {
			dispatch(createCommentsFunc(newCommentObj));
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
