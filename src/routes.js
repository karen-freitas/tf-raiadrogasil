import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import ListEmployees from '../src/pages/ListEmployees/listEmployees'
import Register from '../src/pages/Register/register'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" component={ListEmployees} exact/>
        <Route path="/cadastro" component={Register} />
	
			</Routes>

		</BrowserRouter>
	)
};

export default Router

