import { faCircle as unFilledCheckBox } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck as filledCheckBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import handleToDoContentChange from '../utilities/changingToDoMethods.ts';

const CustomCheckBox = ({ toDoChecked, itemKey, setChangedToDoItem, setToDoChecked, setItemText }) => {
    const handleClick = () => {
        setToDoChecked(!toDoChecked);
        handleToDoContentChange(!toDoChecked, itemKey, setItemText, setChangedToDoItem, setToDoChecked);
        console.log(toDoChecked);
    };

    return (
        <label htmlFor={`check${itemKey}`} >
            <button
                type='button'
                id={`check${itemKey}`}
                style={{ backgroundColor: '#fff', border: '1px solid #fff' }}
                onClick={handleClick}
            >
                <FontAwesomeIcon size='lg' style={{ fontSize: '2rem', color: '#ADD8E6' }} icon={toDoChecked ? filledCheckBox : unFilledCheckBox} />

            </button>

        </label>
    );
};

export default CustomCheckBox;

