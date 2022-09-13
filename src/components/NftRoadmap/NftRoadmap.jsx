import React from 'react';
import Title from '../Title/Title';
import './NftRoadmap.css';

const NftRoadmap = ({ titleName }) => {
	const roadMap = [
		{
			id: 1,
		},
		{
			id: 2,
		},
		{
			id: 3,
		},
		{
			id: 4,
		},
	];

	return (
		<div className='container mx-auto'>
			<Title titleName={'NFT Roadmap'} />

			<div className='grid md:grid-cols-2 gap-20'>
				{roadMap.map((i) => {
					return (
						<div className='bg-black px-14 py-16 w-fit text-white yello-shadow'>
							<div className='flex gap-1'>
								<p className='text-[#D4BA0B] font-semibold text-4xl'>{i.id}</p>
								<div className='border-l-2 border-[#404040] mr-2'></div>
								<p className='my-auto text-3xl'>Art Expos Events</p>
							</div>
							<p className='mt-10 font-medium text-xl'>
								Eget nulla phas ellus odio sit poitor enatibus aliquam blandit ultricies
								eleifend varius tempor vulputate malesuada tristique dictumst ngilla tempus quis
								neque condimentum consectetur egestas get arcu.
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NftRoadmap;
