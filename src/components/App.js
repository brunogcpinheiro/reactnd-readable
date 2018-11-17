import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Loading from './Loading';
import NewPost from './NewPost';

class App extends Component {
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
							<Route path="/" exact component={Dashboard} />
							<Route path="/:category" component={Dashboard} />
							<Route path="/new" component={NewPost} />
						</div>
					)}
				</div>
			</Router>
		);
	}
}

function mapStateToProps ({ categories }) {
	return {
		loading: categories === null,
	};
}

export default connect(mapStateToProps)(App);
