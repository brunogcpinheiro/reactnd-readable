import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Actions from './Actions';
import Post from './Post';
import Loading from './Loading';
import { handleGetAllPosts } from '../actions/posts';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
	componentDidMount () {
		this.props.dispatch(handleGetAllPosts(this.props.category));
	}

	render () {
		console.log(this.props);
		return (
			<Fragment>
				<Actions />
				<div className="cards">
					{this.props.posts.length > 0 ? (
						this.props.posts.map(post => <Post key={post.id} post={post} />)
					) : (
						<Loading />
					)}
				</div>
			</Fragment>
		);
	}
}

function mapStateToProps ({ posts }, props) {
	const { category } = props.match.params;

	return {
		posts,
		category,
	};
}

export default withRouter(connect(mapStateToProps)(Dashboard));
