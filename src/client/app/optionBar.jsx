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
					<div id="mid-gmail-col">
						<div className="mid-action-items">
							<div className="mid-action-item">
								<div id="refresh-item">
									<div id="refresh-item-1">
										<div id="refresh-item-2">
										</div>
									</div>
								</div>
							</div>

							<div className="mid-action-item">
								<div id="refresh-item">
									<div id="refresh-item-1">
										<div id="refresh-item-2">
										</div>
									</div>
								</div>
							</div>

							<div className="mid-action-item">
								<div id="refresh-item">
									<div id="refresh-item-1">
										<div id="refresh-item-2">
										</div>
									</div>
								</div>
							</div>
						</div>						
					</div>
				</div>					
			</div>
		);
	}
});

module.exports = optionBar;