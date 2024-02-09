import {faCircle} from '@fortawesome/free-regular-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';

import handleToDoContentChange from '../utilities/changingToDoMethods';

import DeleteButton from './DeleteButton';

const ToDoListItem = ({
    setChangedToDoItem,
    itemKey,
    text,
    checkbox,
    allToDos,
    setAllToDos

  }) => {
    const [itemText, setItemText] = useState(text);
    const [toDoChecked, setToDoChecked] = useState(checkbox);

    return (
        <div>
            <span key={itemKey}>

                <label htmlFor={`check${itemKey}`} />
                <input
                    style={{height: '25px', width: '25px'}}
                    id={`check${itemKey}`}
                    type='checkbox' checked={toDoChecked} onChange={e => handleToDoContentChange(
                e.target.checked, itemKey, setItemText, setChangedToDoItem, setToDoChecked)}
            />

                <label htmlFor={`text${itemKey}`} />
                <input
                    style={{padding: '10px'}}
                    id={`text${itemKey}`}
                    type='text' value={itemText} onChange={e => handleToDoContentChange(
                e.target.value, itemKey, setItemText, setChangedToDoItem, setToDoChecked)}
                 />

                <DeleteButton
                    allToDos={allToDos}
                    setAllToDos={setAllToDos}
                    itemKey={itemKey}
            />
            </span>
        </div>
    );
  };

export default ToDoListItem;
