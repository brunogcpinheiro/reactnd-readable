import React from 'react';
import { TiThumbsUp } from 'react-icons/ti';
import { TiThumbsDown } from 'react-icons/ti';
import { TiTrash } from 'react-icons/ti';
import { TiTabsOutline } from 'react-icons/ti';
import { TiMessage } from 'react-icons/ti';

const Card = props => {
	return (
		<div className="card">
			<h4 className="card-title">Learning React and Redux</h4>
			<h5>( React )</h5>
			<small>
				by <strong>@brunocarpinelli</strong> at 06 nov 2018
			</small>
			<p>
				Lorem ipsum dolor amet ennui kale chips plaid, XOXO unicorn gochujang
				schlitz shoreditch skateboard. Pour-over artisan drinking vinegar
				authentic woke chillwave shaman distillery blue bottle farm-to-table
				hella asymmetrical flexitarian. Cardigan hammock selvage, prism poke
				cliche man braid. La croix activated charcoal bicycle rights whatever
				keytar lyft gluten-free sartorial beard lo-fi offal.
			</p>
			<div className="actions">
				<a>
					<TiTabsOutline />
					<small>Open</small>
				</a>
				<a>
					<TiTrash />
					<small>Delete</small>
				</a>
				<a>
					<TiMessage /> <span>13</span> <small>Comments</small>
				</a>
				<a>
					<TiThumbsUp /> <span>10</span> <small>Up</small>
				</a>
				<a>
					<TiThumbsDown /> <span>2</span> <small>Down</small>
				</a>
			</div>
		</div>
	);
};

export default Card;
