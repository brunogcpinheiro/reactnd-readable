import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import moment from 'moment';
import { TiThumbsUp, TiThumbsDown, TiTrash, TiEdit } from 'react-icons/ti';
import {
	handleVoteComment,
	handleDeleteComment,
	handleGetComments,
	handleCreateComments,
	handleEditComment
} from '../actions/comments';

import { incrementComments,	decrementComments } from '../actions/posts';

class Comments extends Component {
	
	state = {
		open: false,
		author: '',
		body: '',
	};

	componentDidMount () {
		const { id } = this.props;
		this.props.dispatch(handleGetComments(id));
	}

	componentDidUpdate (prevProps) {
		const { id } = this.props;
		if (this.props.comments.length !== prevProps.comments.length) {
			this.props.dispatch(handleGetComments(id));
		}
		return <Redirect to={`/${this.props.category}/${this.props.id}`} />;
	}

	handleSubmit = e => {
		e.preventDefault();
		const { author, body } = this.state;

		const newComment = {
			id: Math.random().toString(36).substr(-8),
			timestamps: Date.now(),
			author,
			body,
			parentId: this.props.id,
		};

		if (author && body !== '') {
			this.props.dispatch(handleCreateComments(newComment));
		} else {
			alert('Fill in all the fields!');
		}

		this.setState({
			author: '',
			body: '',
		});
		
		this.props.dispatch(incrementComments(this.props.id));
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
			body: '',
		});
	}
	
	onOpenModal = () => {
		this.setState({ open: true });
	}
	
	onCloseModal = () => {
		this.setState({ open: false });
	}
	
	handleDelete = id => {
		this.props.dispatch(handleDeleteComment(id));
		this.props.dispatch(decrementComments(this.props.id));
	};
	
    render () {
        return (
            <div className="comment-wrapper">
				{this.props.sortedComments.length > 0 ? (
					this.props.sortedComments.map(comment => (
						<div className="comment" key={comment.timestamp} >
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
									closeButton: 'modal-close'
								}}
								>
								<h2>Edit comment</h2>
						          <form className="edit-post-form" onSubmit={e => this.handleEditSubmit(e, comment.id)}>
									<label htmlFor="body">Body: </label>
									<textarea
										rows="5"
										type="text"
										placeholder="Edit the comment body..."
										id="body"
										value={this.state.bodyComment}
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
										onClick={() => this.props.dispatch(handleVoteComment(comment.id, 'upVote'))}
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
					))
				) : (
					<p>No comments yet.</p>
				)}
				<div className="add-post">
					<h3>Add new Comment</h3>
					<form
						className="add-post-form"
						onSubmit={e => this.handleSubmit(e)}>
						<label htmlFor="author">Author: </label>
						<input
							type="text"
							placeholder="Type your name..."
							id="author"
							value={this.state.author}
							onChange={e => this.setState({ author: e.target.value })}
						/>
						<label htmlFor="body">Body: </label>
						<textarea
							rows="5"
							type="text"
							placeholder="Type the comment body..."
							id="body"
							value={this.state.body}
							onChange={e => this.setState({ body: e.target.value })}
						/>
						<button type="submit" className="btn-submit">
							Submit
						</button>
					</form>
				</div>
			</div>
        );
    }
}

function mapStateToProps ({ posts }, props) {
    return {
    	sortedComments: props.comments.sort((a, b) => b.voteScore - a.voteScore)
    };
}

export default connect(mapStateToProps)(Comments);