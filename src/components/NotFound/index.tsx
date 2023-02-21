import React from 'react';
import Navbar from '../Navbar';

function NotFound() {
	return (
		<body>
			<Navbar />
			<h1>NOT FOUND</h1>
			<h2>Vite + React + TS (Hamburger + Responsive + Router)</h2>
			<footer className="footer">
				<p className="footer-by">
					A project by{' '}
					<a
						href="https://twitter.com/charliejoiner_"
						rel="noopener"
						className="small-link"
					>
						Charlie Joiner
					</a>
					<a
						href="https://twitter.com/charliejoiner_"
						rel="noopener"
						target="_blank"
						className="no-link icon-twitter"
						aria-label="Follow me on Twitter"
					></a>
				</p>
			</footer>
		</body>
	);
}

export default NotFound;
