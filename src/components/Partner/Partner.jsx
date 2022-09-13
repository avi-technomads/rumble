import React from 'react';

import Partner1 from '../../images/partner1.png';
import Partner2 from '../../images/partner2.png';

const Partner = () => {
	return (
		<div className='container mx-auto flex justify-center items-center space-x-10 pt-20'>
			<img src={Partner1} alt='' />
			<img src={Partner2} alt='' />
		</div>
	);
};

export default Partner;
