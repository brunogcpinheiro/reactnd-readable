import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
	render() {
		const isActive = (path, match, location) => !!(match || path === location.pathname);
		
		return (
			<nav className="nav">
				<ul>
					{this.props.categories.length > 0 ? this.props.categories.map(category => (
						<li key={category.name}>
							<NavLink 
								to={category.path} 
								activeClassName="active"
								isActive={isActive.bind(this, category.path)}>
								{category.name}
							</NavLink>
						</li>
					)) : null}
				</ul>
			</nav>
		);	
	}
};

function mapStateToProps({ categories }) {
	return {
		categories
	}
}

export default connect(mapStateToProps)(Nav);
