import React from 'react';
import PubGolf from '../../media/pubgolf.png';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
	return (
		<body>
			<Navbar />
			<div className="w-fit mx-11 mt-5">
				<div className="rounded-md bg-dark-color h-12 text-center h-full p-3 text-light-color flex">
					<h1 className="text-4xl font-semibold flex-auto">
						Welcome to PubGolf!
					</h1>
					<img src={PubGolf} className="w-10 h-10 flex-auto" />
				</div>
			</div>
			<div className="mt-5 bg-zinc-900/50 p-3 w-screen">
				<h2 className="pl-10 text-lg leading-relaxed text-neutral-100">
					If you've never played the game - Why not try it sometime?
					<br /> There are lots of variation on the rules of the game and the
					number of holes played but in general the game consists of several
					pubs, as well as quite a lot of beer, spirits and a bit of walking.
				</h2>
			</div>
			<Footer />
		</body>
	);
}

export default Home;
