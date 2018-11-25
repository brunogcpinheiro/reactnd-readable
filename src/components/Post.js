import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TiThumbsUp } from 'react-icons/ti';
import { TiThumbsDown } from 'react-icons/ti';
import { TiTrash } from 'react-icons/ti';
import { TiTabsOutline } from 'react-icons/ti';
import { TiMessage } from 'react-icons/ti';

class Card extends Component {
	render () {
		const {
			title,
			author,
			body,
			category,
			commentCount,
			timestamp,
			voteScore,
			id,
		} = this.props.singlePost;

		return (
			<div className="card">
				<h4 className="card-title">{title}</h4>
				<h5>( {category} )</h5>
				<small>
					by <strong>{author}</strong> at {moment(timestamp).format('LL')}
				</small>
				<p>{body}</p>
				<div className="actions">
					<Link to={`/${category}/${id}`}>
						<TiTabsOutline />
						<small>Detail</small>
					</Link>
					<Link to="/">
						<TiTrash />
						<small>Delete</small>
					</Link>
					<Link to={`/${category}/${id}`}>
						<TiMessage /> <span>{commentCount}</span> <small>Comments</small>
					</Link>
					<div className="votes">
						<Link to="/">
							<TiThumbsUp /> <small>Up</small>
						</Link>
						<Link to="/">
							<TiThumbsDown /> <small>Down</small>
						</Link>
						<div className="total">
							<span>{voteScore}</span> <small>Total</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ posts, post }) {
	return {
		posts,
		post,
	};
}

export default connect(mapStateToProps)(Card);
