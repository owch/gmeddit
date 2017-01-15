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
									<div id="multi-select-item">
										<div id="multi-select-item-1">
											<span id="multi-select-box"></span>										
											<div id="multi-select-dropdown"/>
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
									<div id="more-item">
										<span id="more-item-1">More</span>
										<div id="more-item-2">
										</div>
									</div>
								</div>
							</div>
						</div>						
					</div>
					<div id="right-gmail-col">
						<div id="page-range-block">							
							<span id="page-range"><span id="page-range-1">1</span>–<span id="page-range-2">50</span> of <span id="page-range-3">510</span></span>														
						</div>
						<div id="page-arrows">
							<div id="left-nav-arrow">
								<span id="left-nav-arrow-s"></span><img src="image/cleardot.gif" alt="" id="left-nav-arrow-1" />
							</div>						
							<div id="right-nav-arrow">
								<span id="right-nav-arrow-s"></span><img src="image/cleardot.gif" alt="" id="right-nav-arrow-1" />
							</div>
						</div>	
						<div id="DIV_1">
							<div id="DIV_2">
								<div id="DIV_3">
								</div>
								<div id="DIV_4">
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