import React, { Component } from 'react';

class NewPost extends Component {
	render () {
		return (
			<div className="add-post">
				<h3>Add new Post</h3>
				<form className="add-post-form">
					<label htmlFor="title">Title: </label>
					<input type="text" placeholder="Type the post Title" id="title" />
					<label htmlFor="author">Author: </label>
					<input type="text" placeholder="Type the post Author" id="author" />
					<label htmlFor="body">Body: </label>
					<input type="text" placeholder="Type the post Body" id="body" />
				</form>
			</div>
		);
	}
}

export default NewPost;
