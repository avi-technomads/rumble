import React from 'react';
import Title from '../../Title/Title';

const Charts = () => {
	return (
		<div>
			<Title titleName={'Type Advantage Chart'} />

			{/* Type Advantage Chart */}

			<div className='flex flex-col'>
				<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-4 inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='overflow-hidden'>
							<table className='min-w-full text-center'>
								{/* header */}
								<thead className='bg-[#D4BA0B] text-black font-medium text-xl'>
									<tr>
										<th scope='col' className=' font-medium px-6 py-4'></th>
										<th scope='col' className=' px-6 py-4'>
											Fire
										</th>
										<th scope='col' className=' px-6 py-4'>
											Water
										</th>
										<th scope='col' className=' px-6 py-4'>
											Air
										</th>

										<th scope='col' className=' px-6 py-4'>
											Earth
										</th>

										<th scope='col' className=' px-6 py-4'>
											Plant
										</th>

										<th scope='col' className=' px-6 py-4'>
											Lightening
										</th>
									</tr>
								</thead>

								{/* body */}

								<tbody className='font-medium text-white text-xl'>
									{/* row 1 */}

									<tr className='bg-[#202020]  px-6'>
										<td className='px-6 py-4'>Fire</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>

										<td className='px-6 py-4'>-10</td>

										<td className='px-6 py-4'>20</td>

										<td className='px-6 py-4'>0</td>
									</tr>

									{/* row-2 */}

									<tr className='bg-[#333333]  px-6'>
										<td className='px-6 py-4'>Water</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>

										<td className='px-6 py-4'>-10</td>

										<td className='px-6 py-4'>20</td>

										<td className='px-6 py-4'>0</td>
									</tr>

									{/* row 3 */}

									<tr className='bg-[#202020]  px-6'>
										<td className='px-6 py-4'>Air</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>

										<td className='px-6 py-4'>-10</td>

										<td className='px-6 py-4'>20</td>

										<td className='px-6 py-4'>0</td>
									</tr>

									{/* row-4 */}

									<tr className='bg-[#333333]  px-6'>
										<td className='px-6 py-4'>Earth</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>

										<td className='px-6 py-4'>-10</td>

										<td className='px-6 py-4'>20</td>

										<td className='px-6 py-4'>0</td>
									</tr>

									{/* row 5 */}

									<tr className='bg-[#202020]  px-6'>
										<td className='px-6 py-4'>Plant</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>

										<td className='px-6 py-4'>-10</td>

										<td className='px-6 py-4'>20</td>

										<td className='px-6 py-4'>0</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			{/* Rarity boost chart */}
			<Title titleName={'Rarity Boost Chart'} />

			<div className='flex flex-col'>
				<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-4 min-w-full sm:px-6 lg:px-8'>
						<div className='overflow-hidden'>
							<table className='min-w-full text-center'>
								{/* header */}
								<thead className='bg-[#D4BA0B] text-black font-medium text-xl'>
									<tr>
										<th scope='col' className=' px-6 py-4'></th>
										<th scope='col' className=' px-6 py-4'>
											Common
										</th>
										<th scope='col' className=' px-6 py-4'>
											Uncommon
										</th>

										<th scope='col' className=' px-6 py-4'>
											Rare
										</th>

										<th scope='col' className=' px-6 py-4'>
											Epic
										</th>

										<th scope='col' className=' px-6 py-4'>
											Legendary
										</th>
									</tr>
								</thead>

								{/* body */}

								<tbody className='font-medium text-white text-xl'>
									{/* row 1 */}

									<tr className='bg-[#333333] px-6'>
										<td className='px-6 py-4'>Boost</td>

										<td className='px-6 py-4'>0%</td>

										<td className='px-6 py-4'>-2%</td>

										<td className='px-6 py-4'>3%</td>

										<td className='px-6 py-4'>4%</td>

										<td className='px-6 py-4'>5%</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			{/* Winning Elementals */}
			<Title titleName={'Winning Elementals'} />

			<div className='text-white text-center font-medium text-3xl'>
				<p>Top 1949 Ranked Elementals are guaranteed </p>
				<p>to win a SOL Prize</p>
			</div>

			{/* Prize Table */}
			<Title titleName={'Prize Table'} />

			<div className='flex flex-col'>
				<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-4 inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='overflow-hidden'>
							<table className='min-w-full text-center'>
								{/* header */}
								<thead className='bg-[#D4BA0B] text-black font-medium text-xl'>
									<tr>
										<th scope='col' className=' px-6 py-4'>
											Ranking
										</th>
										<th scope='col' className=' px-6 py-4'>
											No Of Winners
										</th>
										<th scope='col' className=' px-6 py-4'>
											Prize Money In SOL
										</th>

										<th scope='col' className=' px-6 py-4'>
											Total
										</th>
									</tr>
								</thead>

								{/* body */}

								<tbody className='font-medium text-white text-xl'>
									{/* row 1 */}

									<tr className='bg-[#202020]  px-6'>
										<td className='px-6 py-4'>1</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>
									</tr>

									{/* row-2 */}

									<tr className='bg-[#333333]  px-6'>
										<td className='px-6 py-4'>2</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>
									</tr>

									{/* row 3 */}

									<tr className='bg-[#202020]  px-6'>
										<td className='px-6 py-4'>3</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>
									</tr>

									{/* row-4 */}

									<tr className='bg-[#333333]  px-6'>
										<td className='px-6 py-4'>4</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>
									</tr>

									{/* row 5 */}

									<tr className='bg-[#202020]  px-6'>
										<td className='px-6 py-4'>5</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>
									</tr>

									{/* row-6 */}

									<tr className='bg-[#333333]  px-6'>
										<td className='px-6 py-4'>6</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>
									</tr>

									{/* row 7 */}

									<tr className='bg-[#202020]  px-6'>
										<td className='px-6 py-4'>7</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>
									</tr>

									{/* row-8 */}

									<tr className='bg-[#333333]  px-6'>
										<td className='px-6 py-4'>8</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>
									</tr>

									{/* row 9 */}

									<tr className='bg-[#202020]  px-6'>
										<td className='px-6 py-4'>9</td>

										<td className='px-6 py-4'>0</td>

										<td className='px-6 py-4'>-20</td>

										<td className='px-6 py-4'>10</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div className='text-white text-center font-medium text-3xl mt-10'>
				<div className='py-2'>
					<p>Winning Eleme ntal NFTs are burned in exchange to claim </p>
					<p>SOL Prize.</p>
				</div>
				<p className='py-2'>Total Mint Revenue = 8192 SOL</p>
				<p className='py-2'>Total Prize Pool = 7000 SOL</p>
				<p className='py-2'>Moved to Rumble V2 Prize Paal = 783 SOL</p>
				<p className='py-2'>Team. Marketing. Launch & Gas Expenses =409 SOL</p>
			</div>

			<Title titleName={'Losing Elements'} />
			<div className='text-white text-center font-medium text md:text-3xl'>
				<div className='py-2'>
					<p>Losing NFTs are completely dead. They can be used to stake</p>
					<p>and earn $RMBL token.</p>
				</div>
				<p className='py-2'>
					$RMBL tokens can be used to mint 783 of upcoming Rumble V2 NFTs.
				</p>
			</div>
		</div>
	);
};

export default Charts;
