import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';

const MoreOptionsButton = () => {
	const [showMoreOptions, setShowMoreOptions] = useState(false);

	return (
    <div>
        <FontAwesomeIcon icon={faEllipsisVertical} />
    </div>
	);
};

export default MoreOptionsButton;
