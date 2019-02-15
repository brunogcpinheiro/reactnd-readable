const api = 'http://readable-api-brunogcpinheiro.c9users.io:8080';

let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	Authorization: token,
};

export function getAllCategories () {
	return fetch(`${api}/categories`, { headers }).then(res => res.json());
}

export function getAllPosts (category = undefined) {
	if (category !== undefined)
		return fetch(`${api}/${category}/posts`, { headers }).then(res =>
			res.json(),
		);
	return fetch(`${api}/posts`, { headers }).then(res => res.json());
}

export function getPost (id) {
	return fetch(`${api}/posts/${id}`, { headers }).then(res => res.json());
}

export function createPosts (post) {
	return fetch(`${api}/posts`, {
		method: 'POST',
		headers,
		body: JSON.stringify(post),
	}).then(res => res.json());
}

export function editPost (id, post) {
	return fetch(`${api}/posts/${id}`, {
		method: 'PUT',
		headers,
		body: JSON.stringify(post),
	}).then(res => res.json());
}

export function deletePost (id) {
	return fetch(`${api}/posts/${id}`, { method: 'DELETE', headers }).then(res =>
		res.json(),
	);
}

export function getComments (id) {
	return fetch(`${api}/posts/${id}/comments`, { headers }).then(res =>
		res.json(),
	);
}

export function createComments (comment) {
	return fetch(`${api}/comments`, {
		method: 'POST',
		headers,
		body: JSON.stringify(comment),
	}).then(res => res.json());
}

export function deleteComment (id) {
	return fetch(`${api}/comments/${id}`, {
		method: 'DELETE',
		headers,
	}).then(res => res.json());
}

export function votePost (id, vote) {
	return fetch(`${api}/posts/${id}`, {
		method: 'POST',
		headers,
		body: JSON.stringify({ option: vote }),
	}).then(res => res.json());
}

export function voteComment (id, vote) {
	return fetch(`${api}/comments/${id}`, {
		method: 'POST',
		headers,
		body: JSON.stringify({ option: vote })
	}).then(res => res.json());
}
