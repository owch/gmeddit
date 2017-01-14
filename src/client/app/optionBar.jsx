import React from 'react';

var optionBar = React.createClass({

	render: function() {
		return (
			<div className="headerdos">
				<div className="gmail-row">
					<div id="left-gmail-col">
						<div id="gmail-drop-block">
							<div id="gmail-drop">
								<span id="gmail-drop-span">Gmail</span>
							</div>
							<div id="gmail-drop-btn">
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = optionBar;