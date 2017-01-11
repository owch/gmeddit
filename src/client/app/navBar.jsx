import React from 'react';

import HeaderRow from './headerRow.jsx';

var navBar = React.createClass({

	render: function() {
		return (
			<div>
				<HeaderRow/>
			</div>
		);
	}

});

module.exports = navBar;