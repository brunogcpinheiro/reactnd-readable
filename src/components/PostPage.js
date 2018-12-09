import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import { TiThumbsUp, TiThumbsDown, TiTrash } from 'react-icons/ti';
import { handleGetPost } from '../actions/post';
import { handleGetComments, handleDeleteComment } from '../actions/comments';
import Post from './Post';

class PostPage extends Component {
	componentDidMount () {
		const { id } = this.props;
		this.props.dispatch(handleGetPost(id));
		this.props.dispatch(handleGetComments(id));
	}

	componentDidUpdate (prevProps) {
		const { id } = this.props;
		if (this.props.comments.length !== prevProps.comments.length) {
			this.props.dispatch(handleGetPost(id));
			this.props.dispatch(handleGetComments(id));
		}
		return <Redirect to={`/${this.props.category}/${this.props.id}`} />;
	}

	handleDelete = id => {
		this.props.dispatch(handleDeleteComment(id));
	};

	render () {
		return (
			<Fragment>
				<div className="cards">
					<Post singlePost={this.props.post} />
				</div>
				<div>
					<h3 style={{ margin: '20px', fontSize: '1.3rem' }}>Comments</h3>
				</div>
				<div className="comments">
					{this.props.comments.length > 0 ? (
						this.props.comments.map(comment => (
							<div className="comment" key={comment.id}>
								<h3>{comment.author}</h3>
								<small>{moment(comment.timestamp).format('LL')}</small>
								<p>{comment.body}</p>
								<div className="actions">
									<span>
										<TiTrash onClick={() => this.handleDelete(comment.id)} />
									</span>
									<div className="votes">
										<Link to="/">
											<TiThumbsUp />
										</Link>
										<Link to="/">
											<TiThumbsDown />
										</Link>
										<div className="total">
											<span>{comment.voteScore}</span> <small>Total</small>
										</div>
									</div>
								</div>
							</div>
						))
					) : (
						<p>No comments yet.</p>
					)}
					<div className="add-post">
						<h3>Add new Comment</h3>
						<form className="add-post-form">
							<label htmlFor="author">Author: </label>
							<input type="text" placeholder="Type your name..." id="author" />
							<label htmlFor="body">Body: </label>
							<textarea
								rows="5"
								type="text"
								placeholder="Type the comment body..."
								id="body"
							/>
							<button type="submit" className="btn-submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}

function mapStateToProps ({ post, comments }, props) {
	const { category, id } = props.match.params;

	return {
		post,
		category,
		id,
		comments,
	};
}

export default connect(mapStateToProps)(PostPage);
