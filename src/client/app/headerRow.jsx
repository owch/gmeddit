import React from 'react';

var headerRow = React.createClass({

	render: function() {
		return (
			<div className="navbar navbar-fixed-top header-row">				
				<div id="topbar">
					<div id="left-header-col" className="col-xs-2">
						<div id="left-header-col-1">
							<a href="#inbox" title="Gmail" id="left-header-col-2">
								<span id="left-header-span">
								</span>
							</a>						
						</div>
					</div>
					<div id="mid-header-col" className="col-xs-9">
						<div id="mid-header-col-1">
							<div id="mid-header-col-2">
								<form>
						            <input id="searchfield" name="searchfield" type="text" />	                        	                        		                        
						            <img src="./image/searchicon.png" id="searchsubmit" />	                    
						        </form>
						    </div>
						</div>
					</div>
					<div id="right-header-col" className="col-xs-1">
						<div id="right-header-col-2">							
							<a id="login-button" href="twitter.com">Sign in</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
});



module.exports = headerRow;