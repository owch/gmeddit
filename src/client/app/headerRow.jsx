import React from 'react';

var headerRow = React.createClass({

	render: function() {
		return (
			<div className="navbar navbar-fixed-top header-row">				
				<div id="topbar">
					<div id="left-header-col">
						<div id="left-header-col-1">
							<a href="#inbox" title="Gmail" id="left-header-col-2">
								<span id="left-header-span">
									<img className="google-logo" src="./image/google_2015_logo.png"/>
								</span>
							</a>						
						</div>
					</div>
					<div className="mid-header-col">
						<div className="mid-header-col-2">
							<div className="mid-header-col-3">
								HelloassaasasassaHelloassaasasassaHelloassaasasassaHelloassaasasassaHelloassaasasassa
							</div>							
						</div>						
					</div>
					<div className="">
						Yello
					</div>
				</div>
			</div>
		);
	}
});

module.exports = headerRow;