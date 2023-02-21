import React from 'react';
import PubGolf from '../../media/pubgolf.png';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
	return (
		<body>
			<Navbar />
			<div className="w-fit mx-11 mt-11">
				<div className="rounded-md bg-dark-color h-12 text-center h-full p-3 text-light-color flex">
					<h1 className="text-4xl font-semibold flex-auto">
						Welcome to PubGolf!
					</h1>
					<img src={PubGolf} className="w-10 h-10 flex-auto" />
				</div>
			</div>
			<h2 className="text-lg mx-11 mt-3 bg-home-color rounded-md w-screen- p-3 leading-relaxed text-neutral-200">
				If you've never played the game - Why not try it sometime?
				<br /> There are lots of variation on the rules of the game and the
				number of holes played but in general the game consists of several pubs,
				as well as quite a lot of beer, spirits and a bit of walking.
			</h2>
			<Footer />
		</body>
	);
}

export default Home;
