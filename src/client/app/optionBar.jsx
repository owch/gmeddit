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
					<div>
						<div id="DIV_1">
							<span id="SPAN_2"></span>
							<div id="DIV_3">
								<span id="SPAN_4"><span id="SPAN_5">1</span>–<span id="SPAN_6">50</span> of <span id="SPAN_7">510</span></span>
							</div>
							<div id="DIV_8">
								<span id="SPAN_9"></span><img src="images/cleardot.gif" alt="" id="IMG_10" />
							</div>
							<div id="DIV_11">
								<span id="SPAN_12"></span><img src="images/cleardot.gif" alt="" id="IMG_13" />
							</div>
							<div id="DIV_14">
								<div id="DIV_15">
									<div id="DIV_16">
										<div id="DIV_17">
											Newest
										</div>
									</div>
									<div id="DIV_18">
										<div id="DIV_19">
											Oldest
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