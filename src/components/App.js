import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Loading from './Loading';
import { TiDocumentAdd } from 'react-icons/ti';
import { TiStarFullOutline } from 'react-icons/ti';
import { TiTime } from 'react-icons/ti';
import { handleGetAllPosts } from '../actions/posts';

class App extends Component {
	componentDidMount () {
		this.props.dispatch(handleGetAllPosts());
	}

	render () {
		return (
			<Router>
				<div className="container">
					{this.props.loading === true ? (
						<Loading />
					) : (
						<div>
							<h1 className="title">
								Read<span>able</span>
							</h1>
							<Nav />
							<button className="add-post">
								<TiDocumentAdd
									style={{ marginRight: '16px', fontSize: '1.5rem' }}
								/>
								New Post
							</button>
							<div className="sort">
								<h3>Sort by</h3>
								<a href="/">
									<TiStarFullOutline />
									<small>Votes</small>
								</a>
								<a href="/">
									<TiTime />
									<small>Time</small>
								</a>
							</div>
							<Route path="/" exact component={Dashboard} />
						</div>
					)}
				</div>
			</Router>
		);
	}
}

function mapStateToProps ({ posts }) {
	return {
		loading: posts === null,
	};
}

export default connect(mapStateToProps)(App);
