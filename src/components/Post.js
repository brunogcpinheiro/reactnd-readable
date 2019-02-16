import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import {
	TiThumbsUp,
	TiThumbsDown,
	TiTrash,
	TiTabsOutline,
	TiMessage,
	TiEdit,
} from 'react-icons/ti';
import {
	handleDeletePost,
	handleVotePost,
	handleEditPost,
} from '../actions/posts';

class Card extends Component {
	state = {
		open: false,
		title: this.props.post.title,
		body: this.props.post.body,
	};

	handleDelete = id => {
		this.props.dispatch(handleDeletePost(id));
	};

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	handleEditSubmit = (e, id) => {
		e.preventDefault();

		const { title, body } = this.state;

		const editedPost = {
			title,
			body,
		};

		if (title && body !== '') {
			this.props.dispatch(handleEditPost(id, editedPost));
		} else {
			alert('Fill in all the fields!');
		}

		this.setState({
			open: false,
		});
	};

	render () {
		const {
			title,
			author,
			body,
			category,
			commentCount,
			timestamp,
			voteScore,
			id,
		} = this.props.post;

		return (
			<div className="card">
				<h4 className="card-title">{title}</h4>
				<h5>( {category} )</h5>
				<small>
					by <strong>{author}</strong> at {moment(timestamp).format('LL')}
				</small>
				<p>{body}</p>
				<button onClick={() => this.onOpenModal()} className="edit-btn">
					<TiEdit />Edit post
				</button>
				<Modal
					open={this.state.open}
					onClose={() => this.onCloseModal()}
					center
					classNames={{
						modal: 'modal-content',
						closeButton: 'modal-close',
					}}>
					<h2>Edit post</h2>
					<form
						className="edit-post-form"
						onSubmit={e => this.handleEditSubmit(e, id)}>
						<label htmlFor="title">Title: </label>
						<input
							type="text"
							placeholder="Edit the post title..."
							id="title"
							value={this.state.title}
							onChange={e => this.setState({ title: e.target.value })}
						/>
						<label htmlFor="body">Body: </label>
						<textarea
							rows="5"
							type="text"
							placeholder="Edit the post body..."
							id="body"
							value={this.state.body}
							onChange={e => this.setState({ body: e.target.value })}
						/>
						<button type="submit" className="edit-btn-submit">
							Submit
						</button>
					</form>
				</Modal>
				<div className="actions">
					<Link to={`/${category}/${id}`}>
						<TiTabsOutline />
						<small>Detail</small>
					</Link>
					<Link to="/">
						<button onClick={() => this.handleDelete(id)}>
							<TiTrash />
							<small>Delete</small>
						</button>
					</Link>
					<Link to={`/${category}/${id}`}>
						<TiMessage /> <span>{commentCount}</span> <small>Comments</small>
					</Link>
					<div className="votes">
						<TiThumbsUp
							onClick={() => this.props.dispatch(handleVotePost(id, 'upVote'))}
						/>{' '}
						<small>Up</small>
						<TiThumbsDown
							onClick={() =>
								this.props.dispatch(handleVotePost(id, 'downVote'))}
						/>{' '}
						<small>Down</small>
						<div className="total">
							<span>{voteScore}</span> <small>Total</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ posts, comments }) {
	return {
		posts,
		comments,
	};
}

export default connect(mapStateToProps)(Card);
