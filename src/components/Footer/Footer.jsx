import React from 'react';

const Footer = () => {
	return (
		<div className='bg-black text-white fixed bottom-0 w-full py-4'>
			<div className='container mx-auto flex justify-between items-center font-medium'>
				<p>&copy; 2022 All rights reserved</p>
				<p>Terms and Conditions | Privacy Policy</p>
				<div className='flex gap-2 items-center'>
					<p>Connect with us</p>
					<p className='cursor-pointer'>
						<i className='fa-brands fa-twitter text-lg hover:text-[#D4BA0B]'></i>
					</p>
					<p className='cursor-pointer'>
						<i className='fa-brands fa-discord text-lg hover:text-[#D4BA0B]'></i>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
