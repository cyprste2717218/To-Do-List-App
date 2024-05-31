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
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <FontAwesomeIcon size='xl' icon={faPlus} />
                </div>

            </button>

        </div>
    );
  };

export default AddToDoButton;
