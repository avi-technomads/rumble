import React from 'react';
import Title from '../Title/Title';
import Slider from 'react-slick';
import nftCollectionImage from '../../images/nftCollection.png';
import '../Home/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './NftCollection.css';
import Aos from 'aos';

const NftCollection = () => {
	Aos.init({ duration: 1000 });

	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 2000,
		className: 'sample',
	};

	const slider = [
		{
			id: 0,
			img: nftCollectionImage,
			name: 'Portable latest blog for women',
			description:
				'The elephant is the epitome of old-timey, with his wisdom and his wrinkled skin, so this rendition of the elephant NFT is the ideal depiction of the timeless creature.',
		},
		{
			id: 1,
			img: nftCollectionImage,
			name: 'Portable latest blog for women',
			description:
				'The elephant is the epitome of old-timey, with his wisdom and his wrinkled skin, so this rendition of the elephant NFT is the ideal depiction of the timeless creature.',
		},
		{
			id: 2,
			img: nftCollectionImage,
			name: 'Portable latest blog for women',
			description:
				'The elephant is the epitome of old-timey, with his wisdom and his wrinkled skin, so this rendition of the elephant NFT is the ideal depiction of the timeless creature.',
		},
	];

	return (
		<>
			<div className=' mt-20'>
				<div className='container mx-auto'>
					<div
						className='flex flex-col items-center justify-center gap-5 text-white'
						data-aos='fade-right'
					>
						<Title titleName={'NFT Collection'} />
						<Slider {...settings}>
							{slider.map((items) => (
								<div className='grid md:grid-cols-2 bluryBackground py-4' key={items.id}>
									<div className='flex items-center justify-start gap-20'>
										<img src={items.img} alt='' />
										<div className='text-left '>
											<p className='font-medium text-xl pr-20'>{items.description}</p>
											<p className='text-[#D4BA0B] text-left mt-10 font-semibold text-2xl'>
												ARTIST: FRANS NAMBINGA
											</p>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
};

export default NftCollection;
