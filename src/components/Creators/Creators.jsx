import React from 'react';
import Title from '../Title/Title';
import Nambia from '../../images/nambia.png';
import './Creators.css';
import Rectangle1 from '../../images/Rectangle1.png';
import Rectangle2 from '../../images/Rectangle2.png';
import Rectangle3 from '../../images/Rectangle3.png';

const Creators = ({ titleName }) => {
	const nftCreators = [
		{
			id: 1,
			name: 'Homateni Ilovu',
			countryName: 'Namibia',
			countryImage: Rectangle1,
		},
		{
			id: 2,
			name: 'Homateni Ilovu',
			countryName: 'Namibia',
			countryImage: Rectangle2,
		},
		{
			id: 3,
			name: 'Homateni Ilovu',
			countryName: 'Namibia',
			countryImage: Rectangle3,
		},
		{
			id: 4,
			name: 'Homateni Ilovu',
			countryName: 'Namibia',
			countryImage: Rectangle3,
		},
		{
			id: 5,
			name: 'Homateni Ilovu',
			countryName: 'Namibia',
			countryImage: Rectangle1,
		},
		{
			id: 6,
			name: 'Homateni Ilovu',
			countryName: 'Namibia',
			countryImage: Rectangle2,
		},
	];

	return (
		<>
			<div className='container mx-auto py-20'>
				<Title titleName={'Meet the Creators'} />
				<div className='grid grid-cols-3 place-content-between gap-10 mx-20  '>
					{nftCreators.map((item) => {
						return (
							<div
								className='bg-black py-4 flex flex-col items-center shadow-creator'
								key={item.id}
							>
								<img src={item.countryImage} alt='' className='h-40 w-40' />
								<p className='text-[#D4BA0B] font-semibold txt-xl mt-3'>{item.name}</p>
								<div className='flex items-center gap-3 mt-2'>
									<p className='text-white'>{item.countryName}</p>
									<img src={Nambia} alt='' className='h-5' />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Creators;
