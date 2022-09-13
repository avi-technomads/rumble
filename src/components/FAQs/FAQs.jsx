import { useState, Fragment } from 'react';
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';

import './FAQS.css';
import Title from '../Title/Title';

export default function Example({ titleName }) {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	const customAnimation = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};

	return (
		<>
			<div className='container mx-auto max-w-6xl px-4'>
				<Title titleName={'FAQs'} />
				<Accordion open={open === 1} animate={customAnimation} className='py-2'>
					<div className='bg-black border-b-none border-[1px] border-[#D4BA0B] rounded-md'>
						<AccordionHeader onClick={() => handleOpen(1)} className='border-b-0'>
							<div className='text-[#D4BA0B] font-medium pl-4 flex items-center gap-4'>
								<i className='fa-sharp fa-solid fa-chevron-up text-white'></i>
								<p>How to mint a Rumble 5 NFT?</p>
							</div>
						</AccordionHeader>
					</div>

					<AccordionBody className='text-white'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, commodi
						alias. Non quia esse quisquam minima delectus tenetur asperiores perferendis!
						Non quia eligendi explicabo et beatae dolorem, cum nobis libero vel autem qui
						totam consequuntur rem porro excepturi consequatur sapiente ad commodi ullam!
						Quis voluptatem eligendi quos, maxime unde minus?
					</AccordionBody>
				</Accordion>

				{/* no.2 */}
				<Accordion open={open === 2} animate={customAnimation} className='py-2'>
					<div className='bg-black border-b-none border-[1px] border-[#D4BA0B] rounded-md'>
						<AccordionHeader onClick={() => handleOpen(2)} className='border-b-0'>
							<div className='text-[#D4BA0B] font-medium pl-4 flex items-center gap-4'>
								<i className='fa-sharp fa-solid fa-chevron-up text-white'></i>
								<p>Who is the team behind the Rumble 5 Collection?</p>
							</div>
						</AccordionHeader>
					</div>

					<AccordionBody className='text-white'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, commodi
						alias. Non quia esse quisquam minima delectus tenetur asperiores perferendis!
						Non quia eligendi explicabo et beatae dolorem, cum nobis libero vel autem qui
						totam consequuntur rem porro excepturi consequatur sapiente ad commodi ullam!
						Quis voluptatem eligendi quos, maxime unde minus?
					</AccordionBody>
				</Accordion>

				{/* no.3 */}
				<Accordion open={open === 3} animate={customAnimation} className='py-2'>
					<div className='bg-black border-b-none border-[1px] border-[#D4BA0B] rounded-md'>
						<AccordionHeader onClick={() => handleOpen(3)} className='border-b-0'>
							<div className='text-[#D4BA0B] font-medium pl-4 flex items-center gap-4'>
								<i className='fa-sharp fa-solid fa-chevron-up text-white'></i>
								<p>Why the Rumble 5?</p>
							</div>
						</AccordionHeader>
					</div>

					<AccordionBody className='text-white'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, commodi
						alias. Non quia esse quisquam minima delectus tenetur asperiores perferendis!
						Non quia eligendi explicabo et beatae dolorem, cum nobis libero vel autem qui
						totam consequuntur rem porro excepturi consequatur sapiente ad commodi ullam!
						Quis voluptatem eligendi quos, maxime unde minus?
					</AccordionBody>
				</Accordion>

				{/* no.4 */}
				<Accordion open={open === 4} animate={customAnimation} className='py-2'>
					<div className='bg-black border-b-none border-[1px] border-[#D4BA0B] rounded-md'>
						<AccordionHeader onClick={() => handleOpen(4)} className='border-b-0'>
							<div className='text-[#D4BA0B] font-medium pl-4 flex items-center gap-4'>
								<i className='fa-sharp fa-solid fa-chevron-up text-white'></i>
								<p>What makes your NFTs different from others?</p>
							</div>
						</AccordionHeader>
					</div>

					<AccordionBody className='text-white'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, commodi
						alias. Non quia esse quisquam minima delectus tenetur asperiores perferendis!
						Non quia eligendi explicabo et beatae dolorem, cum nobis libero vel autem qui
						totam consequuntur rem porro excepturi consequatur sapiente ad commodi ullam!
						Quis voluptatem eligendi quos, maxime unde minus?
					</AccordionBody>
				</Accordion>

				{/* no.5 */}

				<Accordion open={open === 5} animate={customAnimation} className='py-2'>
					<div className='bg-black border-b-none border-[1px] border-[#D4BA0B] rounded-md'>
						<AccordionHeader onClick={() => handleOpen(5)} className='border-b-0'>
							<div className='text-[#D4BA0B] font-medium pl-4 flex items-center gap-4'>
								<i className='fa-sharp fa-solid fa-chevron-up text-white'></i>
								<p>Why only 100 pieces?</p>
							</div>
						</AccordionHeader>
					</div>

					<AccordionBody className='text-white'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, commodi
						alias. Non quia esse quisquam minima delectus tenetur asperiores perferendis!
						Non quia eligendi explicabo et beatae dolorem, cum nobis libero vel autem qui
						totam consequuntur rem porro excepturi consequatur sapiente ad commodi ullam!
						Quis voluptatem eligendi quos, maxime unde minus?
					</AccordionBody>
				</Accordion>

				{/* no.6 */}

				<Accordion open={open === 6} animate={customAnimation} className='py-2'>
					<div className='bg-black border-b-none border-[1px] border-[#D4BA0B] rounded-md'>
						<AccordionHeader onClick={() => handleOpen(6)} className='border-b-0'>
							<div className='text-[#D4BA0B] font-medium pl-4 flex items-center gap-4'>
								<i className='fa-sharp fa-solid fa-chevron-up text-white'></i>
								<p>On which chain will the NFTs be on?</p>
							</div>
						</AccordionHeader>
					</div>

					<AccordionBody className='text-white'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, commodi
						alias. Non quia esse quisquam minima delectus tenetur asperiores perferendis!
						Non quia eligendi explicabo et beatae dolorem, cum nobis libero vel autem qui
						totam consequuntur rem porro excepturi consequatur sapiente ad commodi ullam!
						Quis voluptatem eligendi quos, maxime unde minus?
					</AccordionBody>
				</Accordion>
			</div>
		</>
	);
}
