import React from 'react';
import { TiThumbsUp } from 'react-icons/ti';
import { TiThumbsDown } from 'react-icons/ti';
import { TiTrash } from 'react-icons/ti';
import { TiTabsOutline } from 'react-icons/ti';
import { TiMessage } from 'react-icons/ti';

const Card = props => {
	return (
		<div className="card">
			<h4 className="card-title">{props.post.title}</h4>
			<h5>( React )</h5>
			<small>
				by <strong>@brunocarpinelli</strong> at 06 nov 2018
			</small>
			<p>
				Lorem ipsum dolor amet ennui kale chips plaid, XOXO unicorn gochujang
				schlitz shoreditch skateboard. Pour-over artisan drinking vinegar
				authentic woke chillwave shaman distillery blue bottle.
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
					<TiMessage /> <span>13</span> <small>Comments</small>
				</a>
				<div className="votes">
					<a href="/">
						<TiThumbsUp /> <small>Up</small>
					</a>
					<a href="/">
						<TiThumbsDown /> <small>Down</small>
					</a>
					<div className="total">
						<span>-10</span> <small>Total</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
