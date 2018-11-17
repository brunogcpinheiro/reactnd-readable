import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleGetAllCategories } from '../actions/categories';

class Nav extends Component {
	componentDidMount () {
		this.props.dispatch(handleGetAllCategories());
	}

	render () {
		return (
			<nav className="nav">
				<ul>
					{this.props.categories.length > 0 ? (
						this.props.categories.map(category => (
							<li key={category.name}>
								<NavLink to={category.path} activeClassName="active">
									{category.name}
								</NavLink>
							</li>
						))
					) : null}
				</ul>
			</nav>
		);
	}
}

function mapStateToProps ({ categories }) {
	return {
		categories,
	};
}

export default connect(mapStateToProps)(Nav);
