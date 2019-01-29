import { getPost } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const RECEIVE_POST = 'RECEIVE_POST';

function receivePost (post) {
	return {
		type: RECEIVE_POST,
		post,
	};
}

export function handleGetPost (id) {
	return dispatch => {
		dispatch(showLoading());
		return getPost(id).then(post => {
			dispatch(receivePost(post));
			dispatch(hideLoading());
		});
	};
}