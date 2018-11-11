import React from 'react';
import { TiThumbsUp } from 'react-icons/ti';
import { TiThumbsDown } from 'react-icons/ti';
import { TiTrash } from 'react-icons/ti';
import { TiTabsOutline } from 'react-icons/ti';

const Card = props => {
	return (
		<div className="card">
			<h4>Title</h4>
			<small>06/11/18</small>
			<p>Description test</p>
			<div className="action">
				<TiTabsOutline />
				<TiTrash />
				<TiThumbsUp />
				<TiThumbsDown />
			</div>
		</div>
	);
};

export default Card;
