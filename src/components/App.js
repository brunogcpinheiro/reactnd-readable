import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './Nav';
import Dashboard from './Dashboard';
import NewPost from './NewPost';
import PostPage from './PostPage';
import LoadingBar from 'react-redux-loading-bar';

class App extends Component {
	render () {
		return (
			<Router>
				<div className="container">
					<LoadingBar style={{backgroundColor: '#ffd32a'}} />
					<div>
						<h1 className="title">
							Read<span>able</span>
						</h1>
						<Nav />
						<div>
							<Route exact path="/" component={Dashboard} />
							<Route exact path="/:category" component={Dashboard} />
							<Route path="/:category/:id" component={PostPage} />
							<Route path="/new" component={NewPost} />
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default connect()(App);
