import React, { useEffect } from 'react';
import Title from '../Title/Title';
import Image1 from '../../images/video1.png';
import Image2 from '../../images/video2.png';
import Image3 from '../../images/video3.png';
import PlayImage from '../../images/play.png';
import Aos from 'aos';
import './Results.css';

const Results = () => {
	// useEffect(() => {
	// 	window.scrollTo(0, 0);

	// }, []);

	Aos.init({ duration: 1000 });

	const team = [
		{
			id: 1,
			img: Image1,
			message: 'NFTs Are Finally Dead',
			link: 'https://www.youtube.com/',
			animate: 'fade-left',
			Day: 'Day-1',
		},
		{
			id: 2,
			img: Image2,
			message: 'NFTs Are Finally Dead',
			link: 'https://www.youtube.com/',
			animate: 'fade-left',
			Day: 'Day-2',
		},
		{
			id: 3,
			img: Image3,
			message: 'NFTs Are Finally Dead',
			link: 'https://www.youtube.com/',
			animate: 'fade-left',
			Day: 'Day-3',
		},
		{
			id: 4,
			img: Image1,
			message: 'NFTs Are Finally Dead',
			link: 'https://www.youtube.com/',
			animate: 'fade-right',
			Day: 'Day-1',
		},
		{
			id: 5,
			img: Image2,
			message: 'NFTs Are Finally Dead',
			link: 'https://www.youtube.com/',
			animate: 'fade-right',
			Day: 'Day-2',
		},
		{
			id: 6,
			img: Image3,
			message: 'NFTs Are Finally Dead',
			link: 'https://www.youtube.com/',
			animate: 'fade-right',
			Day: 'Day-3',
		},
		{
			id: 7,
			img: Image1,
			message: 'NFTs Are Finally Dead',
			link: 'https://www.youtube.com/',
			animate: 'fade-left',
			Day: 'Day-1',
		},
		{
			id: 8,
			img: Image2,
			message: 'NFTs Are Finally Dead',
			link: 'https://www.youtube.com/',
			animate: 'fade-left',
			Day: 'Day-2',
		},
		{
			id: 9,
			img: Image3,
			message: 'NFTs Are Finally Dead',
			link: 'https://www.youtube.com/',
			animate: 'fade-left',
			Day: 'Day-3',
		},
	];
	// console.log
	return (
		<>
			<div className='bg-[#1b1b1b] py-16'>
				<div className='mx-auto container '>
					<div data-aos='fade-right'>
						<Title titleName={'Statistics'} />
					</div>
					{/* Start of the table */}
					<div data-aos='fade-left'>
						<div className='flex flex-col'>
							<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
								<div className='py-4 inline-block min-w-full sm:px-6 lg:px-8'>
									<div className='overflow-hidden'>
										<table className='min-w-full text-center'>
											{/* header */}
											<thead className='bg-[#D4BA0B] text-black font-medium text-xl'>
												<tr>
													<th scope='col' className=' font-medium px-6 py-4'>
														Day 0 = Mint
													</th>
													<th scope='col' className=' px-6 py-4'>
														Date
													</th>
													<th scope='col' className=' px-6 py-4'>
														Total NFTs
													</th>
													<th scope='col' className=' px-6 py-4'>
														Most Valuable Player
													</th>

													<th scope='col' className=' px-6 py-4'>
														Round
													</th>

													<th scope='col' className=' px-6 py-4'>
														No of Battle
													</th>

													<th scope='col' className=' px-6 py-4'>
														No Of Winners
													</th>

													<th scope='col' className=' px-6 py-4'>
														Download XLS
													</th>
												</tr>
											</thead>

											{/* body */}

											<tbody className='font-medium text-white text-xl'>
												{/* row 1 */}

												<tr className='bg-[#202020]  px-6'>
													<td className='px-6 py-4'>Day 1</td>

													<td className='px-6 py-4'>7/9/22</td>

													<td className='px-6 py-4'>1000</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>Round 1</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>

												{/* row-2 */}

												<tr className='bg-[#333333]  px-6'>
													<td className='px-6 py-4'>Day 1</td>

													<td className='px-6 py-4'>8/9/22</td>

													<td className='px-6 py-4'>500</td>

													<td className='px-6 py-4'>5</td>

													<td className='px-6 py-4'>Round 2</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>

												{/* row 3 */}

												<tr className='bg-[#202020]  px-6'>
													<td className='px-6 py-4'>Day 3</td>

													<td className='px-6 py-4'>9/9/22</td>

													<td className='px-6 py-4'>1000</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>Round 1</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>

												{/* row-4 */}

												<tr className='bg-[#333333]  px-6'>
													<td className='px-6 py-4'>Day 4</td>

													<td className='px-6 py-4'>8/9/22</td>

													<td className='px-6 py-4'>500</td>

													<td className='px-6 py-4'>5</td>

													<td className='px-6 py-4'>Round 2</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>
												{/* row 5 */}

												<tr className='bg-[#202020]  px-6'>
													<td className='px-6 py-4'>Day 5</td>

													<td className='px-6 py-4'>7/9/22</td>

													<td className='px-6 py-4'>1000</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>Round 1</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>

												{/* row-6 */}

												<tr className='bg-[#333333]  px-6'>
													<td className='px-6 py-4'>Day 6</td>

													<td className='px-6 py-4'>8/9/22</td>

													<td className='px-6 py-4'>500</td>

													<td className='px-6 py-4'>5</td>

													<td className='px-6 py-4'>Round 2</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>
												{/* row 7 */}

												<tr className='bg-[#202020]  px-6'>
													<td className='px-6 py-4'>Day 7</td>

													<td className='px-6 py-4'>7/9/22</td>

													<td className='px-6 py-4'>1000</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>Round 1</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>

												{/* row-8 */}

												<tr className='bg-[#333333]  px-6'>
													<td className='px-6 py-4'>Day 8</td>

													<td className='px-6 py-4'>8/9/22</td>

													<td className='px-6 py-4'>500</td>

													<td className='px-6 py-4'>5</td>

													<td className='px-6 py-4'>Round 2</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>
												{/* row 9 */}

												<tr className='bg-[#202020]  px-6'>
													<td className='px-6 py-4'>Day 9</td>

													<td className='px-6 py-4'>7/9/22</td>

													<td className='px-6 py-4'>1000</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>Round 1</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>

												{/* row-10 */}

												<tr className='bg-[#333333]  px-6'>
													<td className='px-6 py-4'>Day 10</td>

													<td className='px-6 py-4'>8/9/22</td>

													<td className='px-6 py-4'>500</td>

													<td className='px-6 py-4'>5</td>

													<td className='px-6 py-4'>Round 2</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>
												{/* row 11 */}

												<tr className='bg-[#202020]  px-6'>
													<td className='px-6 py-4'>Day 11</td>

													<td className='px-6 py-4'>7/9/22</td>

													<td className='px-6 py-4'>1000</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>Round 1</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>

												{/* row-12 */}

												<tr className='bg-[#333333]  px-6'>
													<td className='px-6 py-4'>Day 12</td>

													<td className='px-6 py-4'>8/9/22</td>

													<td className='px-6 py-4'>500</td>

													<td className='px-6 py-4'>5</td>

													<td className='px-6 py-4'>Round 2</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>

												{/* row 13 */}

												<tr className='bg-[#202020]  px-6'>
													<td className='px-6 py-4'>Day 13</td>

													<td className='px-6 py-4'>7/9/22</td>

													<td className='px-6 py-4'>1000</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>Round 1</td>

													<td className='px-6 py-4'>4096</td>

													<td className='px-6 py-4'>1</td>

													<td className='px-6 py-4'>
														<i className='fa-sharp fa-solid fa-file-arrow-down'></i>
													</td>
												</tr>
												{/* End */}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* End of the table */}
					<div data-aos='fade-right'>
						<Title titleName={'Live Battles'} />
					</div>

					<div className='flex flex-wrap justify-center gap-3 md:gap-10'>
						{team.map((i) => (
							<div className='max-w-md py-10' key={i.id} data-aos={i.animate}>
								<div className='relative'>
									<img src={i.img} alt='' className='w-full h-full' />
									<div className='absolute top-1/2 left-1/2 cursor-pointer'>
										<a href={i.link} target='_blank'>
											<img src={PlayImage} alt='' />
										</a>
									</div>
								</div>
								<div className='flex justify-between pt-2 text-2xl'>
									<p className='text-white '>{i.message}</p>
									<p className='text-[#D4BA0B]'>{i.Day}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Results;
