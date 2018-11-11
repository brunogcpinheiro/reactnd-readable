import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class Dashboard extends Component {
	render () {
		console.log(this.props);
		return (
			<Fragment>
				<div className="cards">
					{this.props.posts.map(post => console.log(post))}
					<Post />
					<Post />
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
