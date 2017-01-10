import React from 'react';
import {render} from 'react-dom';

import MainComp from './mainComp.jsx';

class App extends React.Component {
  render () {
    return (
		<div>
    		<MainComp/>
    	</div>
    )
  }
}

render(<App/>, document.getElementById('app'));