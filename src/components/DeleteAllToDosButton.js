import {faDumpster} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import deleteAllToDos from '../utilities/deleteAllToDos';

const DeleteAllToDosButton = ({setAllToDos, allToDos}) => {
    return (
        <div>
            <button id='deleteAllToDosButton' type='submit' onClick={() => deleteAllToDos(setAllToDos, allToDos)}>
                Delete All To-Dos
                <FontAwesomeIcon style={{marginLeft: '10px'}} icon={faDumpster} size='lg' />
            </button>
        </div>

    );
  };

export default DeleteAllToDosButton;
