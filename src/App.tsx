import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Rules from './components/Rules'; // This shows an error but works completely fine
import Scorecard from './components/Scorecard';

function App() {
	return (
		<Routes>
			<Route path="rules" element={<Rules />} />
			<Route path="scorecard" element={<Scorecard />} />
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export function WrappedApp() {
	return (
		<HashRouter>
			<App />
		</HashRouter>
	);
}
