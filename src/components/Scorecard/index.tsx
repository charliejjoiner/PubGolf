import React from 'react';
import PubGolf from '../../media/pubgolf.png';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Scorecard() {
	return (
		<body>
			<Navbar />
			<div className="flex flex-col">
				<div className="w-fit mx-11 mt-11">
					<div className="rounded-md bg-dark-color h-12 text-center h-full p-3 text-light-color flex">
						<h1 className="text-4xl font-semibold flex-auto">Scorecard</h1>
						<img src={PubGolf} className="w-10 h-10 flex-auto" />
					</div>
				</div>

				<div className="w-fit w-full">
					<div className="mx-11 mt-3 bg-home-color rounded-md w-screen- p-3 leading-relaxed text-neutral-200">
						<h2 className="text-xl underline">
							Highlight and Copy this scorecard into your notes app on your
							phone, you can then edit it to your specific game.
						</h2>
					</div>
				</div>
				<div className="w-fit text-center content-center">
					<table className="mt-3 w-screen table-auto bg-emerald-200 rounded-md border border-slate-500">
						<thead className="border border-slate-500">
							<tr>
								<td className="border-r border-slate-500">Hole</td>
								<td className="border-r border-slate-500">Yardage</td>
								<td className="border-r border-slate-500">Water Hazard</td>
								<td className="border-r border-slate-500">Par</td>
								<td>Score</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border-r border-slate-500">Pub1</td>
								<td className="border-r border-slate-500">1 Beer</td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">4</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub2</td>
								<td className="border-r border-slate-500">Tequila shot</td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">1</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub3</td>
								<td className="border-r border-slate-500"></td>
								<td className="border-r border-slate-500">Y</td>
								<td className="border-r border-slate-500">4</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub4</td>
								<td className="border-r border-slate-500"></td>
								<td className="border-r border-slate-500">Y</td>
								<td className="border-r border-slate-500">3</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub5</td>
								<td className="border-r border-slate-500"></td>
								<td className="border-r border-slate-500">Y</td>
								<td className="border-r border-slate-500">2</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub6</td>
								<td className="border-r border-slate-500"></td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">3</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub7</td>
								<td className="border-r border-slate-500"></td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">3</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub8</td>
								<td className="border-r border-slate-500"></td>
								<td className="border-r border-slate-500">N</td>
								<td className="border-r border-slate-500">3</td>
								<td className="border-r border-slate-500"></td>
							</tr>
							<tr>
								<td className="border-r border-slate-500">Pub9</td>
								<td className="border-r border-slate-500"></td>
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
