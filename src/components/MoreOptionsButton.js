import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';

const MoreOptionsButton = () => {
	const [showMoreOptions, setShowMoreOptions] = useState(false);

	return (
    <div>
		<button
			id='moreOptionsButton'
		>
			<FontAwesomeIcon icon={faEllipsisVertical} size='xl' style={{fontSize: '2rem'}} />
		</button>
  
    </div>
	);
};

export default MoreOptionsButton;
