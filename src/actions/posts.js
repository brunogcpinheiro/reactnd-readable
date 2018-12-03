import { getAllPosts, deletePost } from '../utils/api';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const DELETE_POST = 'DELETE_POST';

function receivePosts (posts) {
	return {
		type: RECEIVE_POSTS,
		posts,
	};
}

export function handleGetAllPosts (category) {
	return dispatch => {
		return getAllPosts(category).then(posts => {
			dispatch(receivePosts(posts));
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
		return deletePost(id).then(() => {
			dispatch(deletePostFunc(id));
		});
	};
}
