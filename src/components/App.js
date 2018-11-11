import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Card from './Card';
import { TiDocumentAdd } from 'react-icons/ti';

class App extends Component {
	render () {
		return (
			<Router>
				<div className="container">
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
					<div className="cards">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
