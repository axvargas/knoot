import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import ResponsiveDrawer from './components/layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import * as actions from '../src/storage/acciones/auth';
import Login from '../src/views/logIn/index';

class App extends Component {


	render() {
		return (

			//<LogIn />
			<BrowserRouter>
				<ResponsiveDrawer>

					<Router >
						<Login {...this.props}>
						</Login>
					</Router>

				</ResponsiveDrawer>
			</BrowserRouter>


		);
	}
}
	 mapStateToProps = state =>{
	return {
		isAuthenticated: state.token != null

    }
}

}

export default connect(mapStateToProps)(App);
