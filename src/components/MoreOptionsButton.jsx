import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const MoreOptionsButton = ({handleShow}) => {
	return (
    <div data-test='more-options-elipsis-button'>
        <button
            id='moreOptionsButton'
            type='button'
            onClick={handleShow}
        >
            <FontAwesomeIcon icon={faEllipsisVertical} size='xl' style={{fontSize: '2rem'}} />
        </button>
    </div>
	);
};

export default MoreOptionsButton;
