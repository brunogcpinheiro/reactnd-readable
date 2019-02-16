import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleGetComments } from '../actions/comments';

import Comment from './Comment';
import NewComment from './NewComment';

class Comments extends Component {
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

	render () {
		return (
			<div className="comment-wrapper">
				{this.props.sortedComments.length > 0 ? (
					this.props.sortedComments.map(comment => (
						<Comment comment={comment} key={comment.id} id={comment.id} />
					))
				) : (
					<p>No comments yet.</p>
				)}
				<NewComment postId={this.props.id} />
			</div>
		);
	}
}

function mapStateToProps ({ posts }, props) {
	return {
		sortedComments: props.comments.sort((a, b) => b.voteScore - a.voteScore),
	};
}

export default connect(mapStateToProps)(Comments);
