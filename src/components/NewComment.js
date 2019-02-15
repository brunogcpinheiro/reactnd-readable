import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCreateComments } from '../actions/comments';

import { incrementComments } from '../actions/posts';

class NewComment extends Component {
    state = {
        author: '',
        body: ''
    };
    
    handleSubmit = e => {
		e.preventDefault();
		const { author, body } = this.state;

		const newComment = {
			id: Math.random().toString(36).substr(-8),
			timestamps: Date.now(),
			author,
			body,
			parentId: this.props.postId,
		};

		if (author && body !== '') {
			this.props.dispatch(handleCreateComments(newComment));
		} else {
			alert('Fill in all the fields!');
		}

		this.setState({
			author: '',
			body: '',
		});
		
		this.props.dispatch(incrementComments(this.props.id));
	};
	
    render () {
        return (
            <div className="add-post">
            	<h3>Add new Comment</h3>
            	<form
            		className="add-post-form"
            		onSubmit={e => this.handleSubmit(e)}>
            		<label htmlFor="author">Author: </label>
            		<input
            			type="text"
            			placeholder="Type your name..."
            			id="author"
            			value={this.state.author}
            			onChange={e => this.setState({ author: e.target.value })}
            		/>
            		<label htmlFor="body">Body: </label>
            		<textarea
            			rows="5"
            			type="text"
            			placeholder="Type the comment body..."
            			id="body"
            			value={this.state.body}
            			onChange={e => this.setState({ body: e.target.value })}
            		/>
            		<button type="submit" className="btn-submit">
            			Submit
            		</button>
            	</form>
            </div>           
        );
    }
}

export default connect()(NewComment);