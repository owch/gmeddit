import React from 'react';
import axios from 'axios';


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
				<h1>Test</h1>
			</div>
		);
	}

});

export default MainComp; 
