import React from 'react';
import PubGolf from '../../media/pubgolf.png';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Scorecard() {
	return (
		<body className="h-screen">
			<Navbar />
			<div className="flex flex-col">
				<div className="w-fit mx-11 mt-4">
					<div className="rounded-md bg-dark-color h-12 text-center h-full p-3 text-light-color flex">
						<h1 className="text-4xl font-semibold flex-auto">Scorecard</h1>
						<img src={PubGolf} className="w-10 h-10 flex-auto" />
					</div>
				</div>

				<div className="w-screen mt-3">
					<div className="bg-zinc-900/50 p-3 text-center">
						<h2 className="text-lg text-neutral-100">
							Highlight and Copy this scorecard into your notes app on your
							phone, you can then edit it to your specific game.
						</h2>
					</div>
				</div>
				<div className="text-center content-center w-screen">
					<table className="table-auto mt-3 ml-12 bg-stone-200/60 border border-slate-500">
						<thead className="border border-slate-500">
							<tr>
								<td className="border-r border-slate-500 md:px-24 py-2">
									Hole
								</td>
								<td className="border-r border-slate-500 md:px-8">Yardage</td>
								<td className="border-r border-slate-500 md:px-1">
									Water Hazard
								</td>
								<td className="border-r border-slate-500 md:px-2">Par</td>
								<td className="md:px-2">Score</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border-r border-slate-500">Pub1</td>
								<td className="border-r border-slate-500">Drink1</td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">4</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub2</td>
								<td className="border-r border-slate-500">Drink2</td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">1</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub3</td>
								<td className="border-r border-slate-500">Drink3</td>
								<td className="border-r border-slate-500">Y</td>
								<td className="border-r border-slate-500">4</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub4</td>
								<td className="border-r border-slate-500">Drink4</td>
								<td className="border-r border-slate-500">Y</td>
								<td className="border-r border-slate-500">3</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub5</td>
								<td className="border-r border-slate-500">Drink5</td>
								<td className="border-r border-slate-500">Y</td>
								<td className="border-r border-slate-500">2</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub6</td>
								<td className="border-r border-slate-500">Drink6</td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">3</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub7</td>
								<td className="border-r border-slate-500">Drink7</td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">3</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub8</td>
								<td className="border-r border-slate-500">Drink8</td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">3</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub9</td>
								<td className="border-r border-slate-500">Drink9</td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">4</td>
								<td className="border-r border-slate-500"></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</body>
	);
}

export default Scorecard;
