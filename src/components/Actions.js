import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { TiDocumentAdd } from 'react-icons/ti';
import { TiStarFullOutline } from 'react-icons/ti';
import { TiTime } from 'react-icons/ti';

const Actions = props => {
    return (
        <Fragment>
            <NavLink className="add-post" to="/new">
            	<TiDocumentAdd
            		style={{ marginRight: '16px', fontSize: '1.5rem' }}
            	/>
            	New Post
            </NavLink>
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
        </Fragment>
    );
}

export default Actions;