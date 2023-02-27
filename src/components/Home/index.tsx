import React from 'react';
import PubGolf from '../../media/pubgolf.png';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
	return (
		<body className="h-screen">
			<Navbar />
			<div className="w-fit mx-11 mt-4">
				<div className="rounded-md bg-dark-color h-12 text-center h-full p-3 text-light-color flex drop-shadow-xl">
					<h1 className="text-2xl md:text-4xl font-semibold flex-auto">
						Welcome to Pub Golf!
					</h1>
					<img src={PubGolf} className="w-10 h-10 flex-auto" />
				</div>
				<div className="pb-4 text-center">
					<p className="text-lime-900 italic text-md font-semibold">
						Are you ready to Tee off?
					</p>
				</div>
			</div>
			<div className="flex bg-zinc-900/50 p-3 w-screen px-5 justify-center ">
				<h2 className="text-xl md:text-2xl leading-relaxed text-neutral-100 text-center">
					If you've never played the game - Why not try it sometime?
				</h2>
			</div>
			<div className="flex h-max">
				<div className="flex-col w-2/4 p-3 md:p-9">
					<div className="rounded-md bg-stone-200/60 w-full p-3 h-full">
						<h1 className="text-lg md:text-2xl text-center leading-tight text-neutral-800">
							Pub golf is a drinking game involving a selection of either 9 or
							18 pubs, to be played by two or more people.
						</h1>
					</div>
				</div>
				<div className="flex-col w-2/4 p-3 md:p-9">
					<div className="rounded-md bg-stone-200/60 w-full p-3 h-full">
						<h1 className="text-lg md:text-2xl text-center leading-tight text-neutral-800">
							It is essentially a pub crawl made into a game. Unlike the actual
							game of golf, pub golf involves no ball or fairway.
						</h1>
					</div>
				</div>
			</div>
			<div className="flex bg-zinc-900/50 p-1 w-screen px-3 justify-center">
				<p className="text-sm text-center text-neutral-100">
					Head over to the{' '}
					<a href="/#/rules" className="text-brand-color">
						rules
					</a>{' '}
					page to find out more
				</p>
			</div>
			<Footer />
		</body>
	);
}

export default Home;
