const api = 'https://readable-api-brunogcpinheiro.c9users.io:8080'

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

export function getAllPosts () {
	return fetch(`${api}/posts`, { headers }).then(res => res.json());
}

export function getPostsByCategory (category) {
	return fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());
}