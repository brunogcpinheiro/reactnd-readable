const api = 'http://localhost:3001';

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
	if (category !== undefined) {
		return fetch(`${api}/${category}/posts`, { headers }).then(res =>
			res.json(),
		);
	}

	return fetch(`${api}/posts`, { headers }).then(res => res.json());
}