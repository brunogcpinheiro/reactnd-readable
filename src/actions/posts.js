import { getAllPosts, createPosts, deletePost, votePost } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const INCREMENT_COMMENTS = 'INCREMENT_COMMENTS';
export const DECREMENT_COMMENTS = 'DECREMENT_COMMENTS';

function receivePosts (posts) {
	return {
		type: RECEIVE_POSTS,
		posts,
	};
}

export function handleGetAllPosts (category) {
	return dispatch => {
		dispatch(showLoading());
		return getAllPosts(category).then(posts => {
			dispatch(receivePosts(posts));
			dispatch(hideLoading());
		});
	};
}

function createPostsFunc (newPost) {
	return {
		type: CREATE_POSTS,
		newPost,
	};
}

export function handleCreatePosts (post) {
	return dispatch => {
		dispatch(showLoading());
		return createPosts(post).then(newPostObj => {
			dispatch(createPostsFunc({ ...post, ...newPostObj }));
			dispatch(hideLoading());
		});
	};
}

function deletePostFunc (id) {
	return {
		type: DELETE_POST,
		id,
	};
}

export function handleDeletePost (id) {
	return dispatch => {
		dispatch(showLoading());
		return deletePost(id).then(() => {
			dispatch(deletePostFunc(id));
			dispatch(hideLoading());
		});
	};
}

function votePostFunc (post) {
	return {
		type: VOTE_POST,
		post
	};
}

export function handleVotePost (id, vote) {
	return dispatch => {
		dispatch(showLoading());
		return votePost(id, vote).then(post => {
			dispatch(votePostFunc(post));
			dispatch(hideLoading());
		});
	};
}

export function incrementComments (postId) {
	return {
		type: INCREMENT_COMMENTS,
		postId
	};
}

export function decrementComments (postId) {
	return {
		type: DECREMENT_COMMENTS,
		postId
	};
}
