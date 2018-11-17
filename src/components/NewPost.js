import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Actions from './Actions';
import Post from './Post';
import Loading from './Loading';

class NewPost extends Component {
	render () {
		console.log(this.props);
		return (
			<Fragment>
				<Actions />
			</Fragment>
		);
	}
}

function mapStateToProps ({ posts }) {
	return {
		posts,
	};
}

export default connect(mapStateToProps)(NewPost);