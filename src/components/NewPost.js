import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCreatePosts } from '../actions/posts';

class NewPost extends Component {
	state = {
		title: '',
		author: '',
		category: '',
		body: '',
	};

	handleSubmit = e => {
		e.preventDefault();
		const { title, author, category, body } = this.state;

		const newPost = {
			id: Math.random().toString(36).substr(-8),
			timestamp: Date.now(),
			title,
			author,
			category,
			body,
		};
		this.props.dispatch(handleCreatePosts(newPost));
	};

	render () {
		return (
			<div className="add-post">
				<h3>Add new Post</h3>
				<form className="add-post-form" onSubmit={e => this.handleSubmit(e)}>
					<label htmlFor="title">Title: </label>
					<input
						type="text"
						placeholder="Type the post title..."
						id="title"
						value={this.state.title}
						onChange={e => this.setState({ title: e.target.value })}
					/>
					<label htmlFor="author">Author: </label>
					<input
						type="text"
						placeholder="Type the post author..."
						id="author"
						value={this.state.author}
						onChange={e => this.setState({ author: e.target.value })}
					/>
					<label htmlFor="category">Category: </label>
					<select
						value={this.state.category}
						onChange={e => this.setState({ category: e.target.value })}>
						{this.props.categories.length > 0 ? (
							this.props.categories.map(category => (
								<option value={category.name} key={category.name}>
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
						value={this.state.body}
						onChange={e => this.setState({ body: e.target.value })}
					/>
					<button type="submit" className="btn-submit">
						Submit
					</button>
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
