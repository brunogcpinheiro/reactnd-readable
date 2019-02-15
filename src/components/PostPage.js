import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Comments from './Comments';

class PostPage extends Component {
	render () {
		return (
			<Fragment>
				<div className="cards">
					<Post post={this.props.singlePost} />
				</div>
				<div>
					<h3 style={{ margin: '20px', fontSize: '1.3rem' }}>Comments</h3>
					<small>Comments are sorted by votes. More to less.</small>
				</div>
				<div className="comments">
					<Comments 
						comments={this.props.comments} 
						id={this.props.id} 
						category={this.props.category}
					/>
				</div>
			</Fragment>
		);
	}
}

function mapStateToProps ({ posts, comments }, props) {
	const { category, id } = props.match.params;

	return {
		singlePost: posts.find(post => post.id === id),
		category,
		id,
		comments
	};
}

export default connect(mapStateToProps)(PostPage);
