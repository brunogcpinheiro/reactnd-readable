import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleGetAllCategories } from '../actions/categories';
import { handleGetAllPosts } from '../actions/posts';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
	componentDidMount () {
		this.props.dispatch(handleGetAllCategories());
		this.props.dispatch(handleGetAllPosts(this.props.category));
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

function mapStateToProps ({ categories }, props) {
	const { category } = props.match.params;

	return {
		categories,
		category,
	};
}

export default withRouter(connect(mapStateToProps)(Nav));
