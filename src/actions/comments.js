import { getComments, createComments, deleteComment, voteComment } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const CREATE_COMMENTS = 'CREATE_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';

function receiveComments (comments) {
	return {
		type: RECEIVE_COMMENTS,
		comments,
	};
}

export function handleGetComments (id) {
	return dispatch => {
		dispatch(showLoading());
		return getComments(id).then(comments => {
			dispatch(receiveComments(comments));
			dispatch(hideLoading());
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
		dispatch(showLoading());
		return createComments(comment).then(newCommentObj => {
			dispatch(createCommentsFunc(newCommentObj));
			dispatch(hideLoading());
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
		dispatch(showLoading());
		return deleteComment(id).then(() => {
			dispatch(deleteCommentFunc(id));
			dispatch(hideLoading());
		});
	};
}

function voteCommentFunc (comment) {
	return {
		type: VOTE_COMMENT,
		comment,
	};
}

export function handleVoteComment (id, vote) {
	return dispatch => {
		dispatch(showLoading());
		return voteComment(id, vote).then(comment => {
			dispatch(voteCommentFunc(comment));
			dispatch(hideLoading());
		});
	};
}
