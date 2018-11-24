import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewPost extends Component {
	state = {};

	render () {
		return (
			<div className="add-post">
				<h3>Add new Post</h3>
				<form className="add-post-form">
					<label htmlFor="title">Title: </label>
					<input type="text" placeholder="Type the post title..." id="title" />
					<label htmlFor="author">Author: </label>
					<input
						type="text"
						placeholder="Type the post author..."
						id="author"
					/>
					<label htmlFor="category">Category: </label>
					<select>
						{this.props.categories.length > 0 ? (
							this.props.categories.map(category => (
								<option value={category.path} key={category.name}>
									{category.name}
								</option>
							))
						) : null}
					</select>
					<label htmlFor="body">Body: </label>
					<textarea
						rows="5"
						type="text"
						placeholder="Type the post body..."
						id="body"
					/>
				</form>
			</div>
		);
	}
}

function mapStateToProps ({ categories }) {
	return {
		categories,
	};
}

export default connect(mapStateToProps)(NewPost);
