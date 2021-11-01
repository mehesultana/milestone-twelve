import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route>
						<Home path="/home" />
					</Route>
					<Route>
						<Home path="/" />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
