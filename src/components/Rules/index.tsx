import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Rules() {
	return (
		<body>
			<Navbar />
			<div className="flex flex-col">
				<div className="w-fit mt-11 ml-11">
					<div className="rounded-md bg-dark-color h-12 text-center h-full p-3 text-light-color flex">
						<h1 className="text-4xl font-semibold flex-auto">Rules!</h1>
						<img
							src={'/src/media/pubgolf.png'}
							className="w-10 h-10 flex-auto"
						/>
					</div>
				</div>
				<div className="w-fit w-full">
					<div className="mx-11 mt-3 bg-home-color rounded-md w-screen- p-3 leading-relaxed text-neutral-200">
						<h2 className="text-xl underline">The Basics</h2>
						<p className="text-sm">
							Each pub is a hole, and as such it has a par and a specified
							drink, and may have a water hazard. <br />
							Your score is the number of mouthfuls for the drink.
							<br /> The par and the drink are specified on the scorecard for
							each hole.
						</p>
					</div>
				</div>
				<div className="w-fit w-full">
					<div className="mx-11 mt-3 bg-home-color rounded-md w-screen- p-3 leading-relaxed text-neutral-200">
						<h2 className="text-xl underline">Drinks</h2>
						<p className="text-sm">
							You must have a mixer if specified, if none is specified, then
							mixers are optional, and do not influence the score. <br />
							Straws are not allowed to be used at any point on the course
							(unless specified).
							<br /> The course must be verified by a course referree (whoever's
							organising this excursion).
							<br />
							<br /> A stroke is defined as taking the glass to the mouth and
							drinking. <br />
							When the glass leaves your mouth, or you stop drinking, your
							stroke has finished.
							<br />
							<span className="text-red-600 font-bold">
								YOU CANNOT KEEP THE GLASS TO YOUR MOUTH AND BREATH VIA YOUR NOSE
							</span>
						</p>
					</div>
				</div>
				<div className="w-fit w-full">
					<div className="mx-11 mt-3 bg-home-color rounded-md w-screen- p-3 leading-relaxed text-neutral-200">
						<h2 className="text-xl underline">Drink Substitution</h2>
						<p className="text-sm">
							If you wish to play the hole using a drink substitution, this is
							not really acceptable and is at the course referree's discretion.
							<br />
							<span className="text-red-600 font-bold">
								It will also incurs a penalty.
							</span>
							<br /> The substitution must be of the same drink type (i.e. a
							pint for a pint, or a spirit for a spirit) <br />
							The penalty for drink substitution is double the original drink,
							so if the drink is a pint, the penalty is 2 pints.
							<br /> The number of strokes taken for the penalty drink must be
							added to the score for the hole.
						</p>
					</div>
				</div>
				<div className="w-fit w-full">
					<div className="mx-11 mt-3 bg-home-color rounded-md w-screen- p-3 leading-relaxed text-neutral-200">
						<h2 className="text-xl underline">Water Hazards</h2>
						<p className="text-sm">
							If a hole has a water hazard, you are not allowed to go to the
							toilet there.
							<br />
							<span className="text-red-600 font-bold">
								Penalty for violation is playing the hole again.
							</span>
							<br /> When playing the penalty, the total strokes for playing the
							hole twice must be used as the score for the hole.
						</p>
					</div>
				</div>
				<div className="w-fit w-full">
					<div className="mx-11 mt-3 bg-home-color rounded-md w-screen- p-3 leading-relaxed text-neutral-200">
						<h2 className="text-xl underline">Scoring</h2>
						<p className="text-sm">
							Your score for a hole is the number of strokes taken to complete
							the hole, this must be recorded on your score card. <br />
							You must also record all penalties, slip-ups and other violations
							of the rules.
							<br />
							The winner of each course is the player with the lowest score.
							<br />
							<br />
							In the event of a tie at the end of the competition the player
							with the least number of penalties will be declared the winner.
							<br /> If there is still a tie then a play-off occurs, where the
							last hole is played repeately until one player wins by two
							strokes. <br />
							Any disputes shall be settle by a commitee comprising the
							organisers and a designated referee.
							<br />
							<br /> Any drinks played outside of those required for the
							competition will not influence the score in any direct way. <br />
							Throwing up is not good but will only add two strokes to your
							score card.
							<br />{' '}
							<span className="text-red-600 font-bold">
								These rules are subject to change without notice.
							</span>
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</body>
	);
}

export default Rules;
