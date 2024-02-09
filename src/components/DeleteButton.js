import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from '../styles.css';
import deleteToDo from '../utilities/deleteToDo';

const DeleteButton = ({allToDos, setAllToDos, itemKey}) => {
    return (

        <span style={{marginLeft: '5px'}} onClick={() => deleteToDo(allToDos, setAllToDos, itemKey)}>
            <FontAwesomeIcon className='deleteIcon' icon={faTrash} size='lg' />
        </span>

    );
};

export default DeleteButton;
