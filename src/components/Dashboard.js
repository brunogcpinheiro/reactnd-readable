import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { handleGetAllPosts } from '../actions/posts';
import { withRouter } from 'react-router-dom';
import { TiStarFullOutline } from 'react-icons/ti';
import { TiTime } from 'react-icons/ti';
import NewPost from './NewPost';

class Dashboard extends Component {
	componentDidMount () {
		this.props.dispatch(handleGetAllPosts(this.props.category));
	}

	componentDidUpdate (prevProps) {
		if (this.props.category !== prevProps.category) {
			this.props.dispatch(handleGetAllPosts(this.props.category));
		}
	}

	render () {
		return (
			<Fragment>
				<div className="sort">
					<h3>Sort by</h3>
					<a href="/">
						<TiStarFullOutline />
						<small>Votes</small>
					</a>
					<a href="/">
						<TiTime />
						<small>Time</small>
					</a>
				</div>
				<div className="cards">
					{this.props.posts.length > 0 ? (
						this.props.posts.map(post => <Post key={post.id} post={post} />)
					) : null}
				</div>
				<NewPost />
			</Fragment>
		);
	}
}

function mapStateToProps ({ posts }, props) {
	const { category } = props.match.params;
	const { pathname } = props.location;

	return {
		posts,
		category,
		pathname,
	};
}

export default withRouter(connect(mapStateToProps)(Dashboard));
