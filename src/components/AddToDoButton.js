import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

import createNewToDoItem from '../utilities/createNewToDoItem';

const AddToDoButton = ({
    onNewToDoItem,
    allToDos
  }) => {
    return (
        <div >
            <button
                id='addToDoButton'
                type='submit' onClick={() =>
          createNewToDoItem(onNewToDoItem, allToDos)}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>

        </div>
    );
  };

export default AddToDoButton;
