import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';
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
	
	handleSortVote = (e, sorType) => {
		e.preventDefault();
		
		// switch(sorType) {
		// 	case 'upVote':
		// 		return this.props.orderedPosts.sort((a, b) => a.voteScore - b.voteScore);
		// 	case 'downVote':
		// 		return this.props.orderedPosts.sort((a, b) => b.voteScore - a.voteScore);
		// 	case 'upTime':
		// 		return this.props.orderedPosts.sort((a, b) => a.timestamp - b.timestamp);
		// 	case 'downTime':
		// 		return this.props.orderedPosts.sort((a, b) => b.timestamp - a.timestamp);
		// 	default:
		// 		return console.log('Something goes wrong!')
		// }
	}

	render () {
		return (
			<Fragment>
				<div className="sort">
					<h3>Sort by</h3>
					<button onClick={e => this.handleSortVote(e, "upVote")}>
						<TiStarFullOutline />
						<small>Votes Up</small>
					</button>
					<button onClick={e => this.handleSortVote(e, "downVote")}>
						<TiStarFullOutline />
						<small>Votes Down</small>
					</button>
					<button onClick={e => this.handleSortVote(e, "upVote")}>
						<TiTime />
						<small>Up Time</small>
					</button>
					<button onClick={e => this.handleSortVote(e, "downVote")}>
						<TiTime />
						<small>Down Time</small>
					</button>
				</div>
				<PostsList posts={this.props.orderedPosts} />
				<NewPost />
			</Fragment>
		);
	}
}

function mapStateToProps ({ posts }, props) {
	const { category } = props.match.params;
	const { pathname } = props.location;

	return {
		orderedPosts: posts.sort((a, b) => b.voteScore - a.voteScore),
		category,
		pathname
	};
}

export default withRouter(connect(mapStateToProps)(Dashboard));
