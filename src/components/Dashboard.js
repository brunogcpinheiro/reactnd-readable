import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import { handleGetAllPosts } from '../actions/posts';
import { withRouter } from 'react-router-dom';
import { TiStarFullOutline, TiStarOutline, TiTime } from 'react-icons/ti';
import NewPost from './NewPost';

class Dashboard extends Component {
	state = {
		sortType: '',
	};

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
					<button
						className="sort-btn"
						onClick={() => this.setState({ sortType: 'moreVoted' })}>
						<TiStarFullOutline />
						<small>More Voted</small>
					</button>
					<button
						className="sort-btn"
						onClick={() => this.setState({ sortType: 'lessVoted' })}>
						<TiStarOutline />
						<small>Less Voted</small>
					</button>
					<button
						className="sort-btn"
						onClick={() => this.setState({ sortType: 'newest' })}>
						<TiTime />
						<small>Newest</small>
					</button>
					<button
						className="sort-btn"
						onClick={() => this.setState({ sortType: 'oldest' })}>
						<TiTime />
						<small>Oldest</small>
					</button>
				</div>
				<a href="#new" className="new-post-btn">
					New Post
				</a>
				<PostsList sortType={this.state.sortType} />
				<div id="new">
					<NewPost category={this.props.category}/>
				</div>
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
