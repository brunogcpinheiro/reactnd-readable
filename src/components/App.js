import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './Nav';
import Dashboard from './Dashboard';
import PostPage from './PostPage';
import NotFound from './NotFound';
import LoadingBar from 'react-redux-loading-bar';

class App extends Component {
	render () {
		return (
			<Router>
				<div className="container">
					<LoadingBar style={{backgroundColor: '#ffd32a', height: '5px'}} />
					<div>
						<Link to="/">
							<h1 className="title">
								Read<span>able</span>
							</h1>
						</Link>
						<Nav />
						<div>
							<Switch>
								<Route exact path="/" component={Dashboard} />
								<Route exact path="/:category" component={Dashboard} />
								{this.props.posts.length !== 0 ? (
									<Route path="/:category/:id" component={PostPage} />
								) : <Route component={NotFound} />}
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

function mapStateToProps ({ posts }) {
	return {
		posts
	};
}

export default connect(mapStateToProps)(App);
