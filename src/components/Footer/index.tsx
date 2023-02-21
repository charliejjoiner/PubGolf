import React from 'react';

function Footer() {
	return (
		<footer className="footer">
			<p className="footer-by">
				A project by{' '}
				<a
					href="https://charliejoiner.dev"
					rel="noopener"
					className="small-link"
				>
					Charlie Joiner
				</a>
				<a
					href="https://charliejoiner.dev"
					rel="noopener"
					target="_blank"
					className="no-link icon-twitter"
					aria-label="Follow me on Twitter"
				></a>
			</p>
		</footer>
	);
}

export default Footer;
