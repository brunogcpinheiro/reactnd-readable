import React from 'react';
import moment from 'moment';
import { TiThumbsUp } from 'react-icons/ti';
import { TiThumbsDown } from 'react-icons/ti';
import { TiTrash } from 'react-icons/ti';
import { TiTabsOutline } from 'react-icons/ti';
import { TiMessage } from 'react-icons/ti';

const Card = props => {
	const { title, author, body, category, commentCount, timestamp, voteScore } = props.post;
	return (
		<div className="card">
			<h4 className="card-title">{title}</h4>
			<h5>( {category} )</h5>
			<small>
				by <strong>{author}</strong> at {moment(timestamp).format("LL")}
			</small>
			<p>
				{body}
			</p>
			<div className="actions">
				<a href="/">
					<TiTabsOutline />
					<small>Open</small>
				</a>
				<a href="/">
					<TiTrash />
					<small>Delete</small>
				</a>
				<a href="/">
					<TiMessage /> <span>{commentCount}</span> <small>Comments</small>
				</a>
				<div className="votes">
					<a href="/">
						<TiThumbsUp /> <small>Up</small>
					</a>
					<a href="/">
						<TiThumbsDown /> <small>Down</small>
					</a>
					<div className="total">
						<span>{voteScore}</span> <small>Total</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
