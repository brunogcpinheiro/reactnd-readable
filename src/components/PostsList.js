import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class PostsList extends Component {
    render () {
        return (
            <div className="cards">
				{this.props.posts.length > 0 ?
				this.props.posts.map(post => (
				    <Post key={post.id} post={post} />
				)): null}
			</div>
        );
    }
}

export default connect()(PostsList);
