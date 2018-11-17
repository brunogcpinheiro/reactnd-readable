import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class NewPost extends Component {
	render () {
		console.log(this.props);
		return <Fragment />;
	}
}

function mapStateToProps ({ posts }) {
	return {
		posts,
	};
}

export default connect(mapStateToProps)(NewPost);
