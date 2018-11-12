import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Loading from './Loading';

class Dashboard extends Component {
	render () {
		console.log(this.props);
		return (
			<Fragment>
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

function mapStateToProps ({ posts }) {
	return {
		posts,
	};
}

export default connect(mapStateToProps)(Dashboard);
