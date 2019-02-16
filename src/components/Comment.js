import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TiThumbsUp, TiThumbsDown, TiTrash, TiEdit } from 'react-icons/ti';
import Modal from 'react-responsive-modal';
import moment from 'moment';
import {
	handleVoteComment,
	handleEditComment,
	handleDeleteComment,
} from '../actions/comments';
import { decrementComments } from '../actions/posts';

export class Comment extends Component {
	state = {
		open: false,
		body: this.props.comment.body,
	};

	handleEditSubmit = (e, id) => {
		e.preventDefault();

		const { body } = this.state;

		const editedComment = {
			body,
		};

		if (body !== '') {
			this.props.dispatch(handleEditComment(id, editedComment));
		} else {
			alert('Fill in all the fields!');
		}

		this.setState({
			open: false,
		});
	};

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	handleDelete = id => {
		this.props.dispatch(handleDeleteComment(id));
		this.props.dispatch(decrementComments(this.props.id));
	};

	render () {
		const { comment } = this.props;
		return (
			<div className="comment">
				<h3>{comment.author}</h3>
				<small>{moment(comment.timestamp).format('LL')}</small>
				<p>{comment.body}</p>
				<button onClick={() => this.onOpenModal()} className="edit-btn">
					<TiEdit />Edit comment
				</button>
				<Modal
					open={this.state.open}
					onClose={() => this.onCloseModal()}
					center
					classNames={{
						modal: 'modal-content',
						closeButton: 'modal-close',
					}}>
					<h2>Edit comment</h2>
					<form
						className="edit-post-form"
						onSubmit={e => this.handleEditSubmit(e, comment.id)}>
						<label htmlFor="body">Body: </label>
						<textarea
							rows="5"
							type="text"
							placeholder="Edit the comment body..."
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
					<span>
						<TiTrash onClick={() => this.handleDelete(comment.id)} />
					</span>
					<div className="votes">
						<TiThumbsUp
							onClick={() =>
								this.props.dispatch(handleVoteComment(comment.id, 'upVote'))}
						/>{' '}
						<TiThumbsDown
							onClick={() =>
								this.props.dispatch(handleVoteComment(comment.id, 'downVote'))}
						/>{' '}
						<div className="total">
							<span>{comment.voteScore}</span> <small>Total</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Comment);
