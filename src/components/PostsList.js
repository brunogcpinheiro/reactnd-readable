import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class PostsList extends Component {
	render () {
		return (
			<div className="cards">
				{this.props.orderedPosts.length > 0 ? (
					this.props.orderedPosts.map(post => (
						<Post key={post.id} post={post} />
					))
				) : <h4>No posts here. Add one! =)</h4>}
			</div>
		);
	}
}

function mapStateToProps ({ posts }, props) {
	if (props.sortType === 'moreVoted') {
		return { orderedPosts: posts.sort((a, b) => b.voteScore - a.voteScore) };
	} else if (props.sortType === 'lessVoted') {
		return { orderedPosts: posts.sort((a, b) => a.voteScore - b.voteScore) };
	} else if (props.sortType === 'newest') {
		return { orderedPosts: posts.sort((a, b) => b.timestamp - a.timestamp) };
	} else if (props.sortType === 'oldest') {
		return { orderedPosts: posts.sort((a, b) => a.timestamp - b.timestamp) };
	} else {
		return { orderedPosts: posts.sort((a, b) => b.voteScore - a.voteScore) };
	}
}

export default connect(mapStateToProps)(PostsList);
