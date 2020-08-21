import React from 'react';

import ResponsiveDrawer from './components/layout';

import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
function App() {
	return (
		
		//<LogIn />
		<BrowserRouter>
			<ResponsiveDrawer>

				<Router />
				
			</ResponsiveDrawer>
		</BrowserRouter>
		
		
	);
}

export default App;
