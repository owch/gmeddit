import React from 'react';
import axios from 'axios';

import NavBar from './navBar.jsx';
import OptBar from './optionBar.jsx';

var MainComp = React.createClass({
	update: function() {
		axios.get('https://www.reddit.com/r/all.json')
	  	.then(function (response) {
	    	console.log(response);
	 	})
	  	.catch(function (error) {
	    	console.log(error);
	  	});
	},
	render: function() {
		console.log("Test");
		this.update();
		return (
			<div>
				<div>
					<NavBar/>
				</div>				
				<div>
					<OptBar/>
				</div>
			</div>
		);
	}
});

export default MainComp; 
