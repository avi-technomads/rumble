import React ,{useEffect} from 'react';
import './Battle.css';
import Image1 from '../../images/image1.png';
import Image2 from '../../images/image2.png';
import Image3 from '../../images/image3.png';
import Image4 from '../../images/image4.png';
import Image5 from '../../images/image5.png';
import Image6 from '../../images/image6.png';
import RumbleGenesis from '../../images/rumbleBig.png';
import HowWorks from './HowWorks/HowWorks';
import Charts from './Charts/Charts';
import Aos from 'aos';

const Battle = () => {
	Aos.init({ duration: 1000 });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const Images = [
		{
			id: 1,
			image: Image1,
		},
		{
			id: 2,
			image: Image2,
		},
		{
			id: 3,
			image: Image3,
		},
		{
			id: 4,
			image: Image6,
		},
		{
			id: 5,
			image: Image5,
		},
		{
			id: 6,
			image: Image6,
		},
	];

	const liLists = [
		{
			id: 1,
			text: '8192 total Elemental NFTs',
		},

		{
			id: 2,
			text: '6 Elemental types',
		},

		{
			id: 3,
			text: '13 Rounds of Battle Royale',
		},

		{
			id: 4,
			text: 'Top 1949 winners get guaranteed SOL Prize',
		},

		{
			id: 5,
			text:
				'95% of mint funds goes to prize  pool, 5% goes to team, marketing & gas fees',
		},

		{
			id: 6,
			text:
				'Mint revenue will be held in Escrow Wallet until full prize money is distributed',
		},

		{
			id: 7,
			text: 'Provably fair using Onchain Algorithms',
		},
	];
	return (
		<>
			<div className='bg-[#1b1b1b]'>
				<div className='container mx-auto py-24 '>
					<div className='grid grid-cols-3'>
						{Images.map((item) => (
							<>
								<img src={item.image} alt={item.image} data-aos='zoom-in' />
							</>
						))}
					</div>

					<div className='grid md:grid-cols-2 place-items-center py-20'>
						<div data-aos='fade-right'>
							<img src={RumbleGenesis} alt='rumble_image' />
						</div>
						<div className='place-items-start'>
							<ul className='text-white ul-list' data-aos='fade-left'>
								{liLists.map((item) => (
									<li className='font-medium text-3xl py-3 pl-2' key={item.id}>
										{item.text}
									</li>
								))}
							</ul>
						</div>
					</div>

					<HowWorks />
					<Charts />
				</div>
			</div>
		</>
	);
};

export default Battle;
