import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink to="/" exact activeClassName="active">
						All
					</NavLink>
				</li>
				<li>
					<NavLink to="/react" activeClassName="active">
						React
					</NavLink>
				</li>
				<li>
					<NavLink to="/redux" activeClassName="active">
						Redux
					</NavLink>
				</li>
				<li>
					<NavLink to="/udacity" activeClassName="active">
						Udacity
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
