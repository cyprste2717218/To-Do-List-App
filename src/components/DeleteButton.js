import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

import deleteToDo from '../utilities/deleteToDo';

const DeleteButton = ({allToDos, setAllToDos, itemKey}) => {
    return (

        <span data-test='to-do-list-item-delete-button' style={{width: '100%', marginLeft: '5px'}} onClick={() => deleteToDo(allToDos, setAllToDos, itemKey)}>
            <FontAwesomeIcon className='deleteIcon' icon={faTrash} size='lg' />
        </span>

    );
};

export default DeleteButton;
