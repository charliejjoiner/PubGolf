import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Generator from './components/Generator';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Register from './components/Register';
import Rules from './components/Rules'; // This shows an error but works completely fine

function App() {
	return (
		<Routes>
			<Route path="rules" element={<Rules />} />
			<Route path="generator" element={<Generator />} />
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
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
