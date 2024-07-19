import React, { useState } from 'react';

import handleToDoContentChange from '../utilities/changingToDoMethods.ts';

import CustomCheckBox from './CustomCheckbox.tsx';
import DeleteButton from './DeleteButton.tsx';

type ToDoListItemType = {
    setChangedToDoItem: Function,
    itemKey: number,
    text: string,
    checkbox: boolean,
    allToDos: any,
    setAllToDos: Function
}

const ToDoListItem = ({
    setChangedToDoItem,
    itemKey,
    text,
    checkbox,
    allToDos,
    setAllToDos

}: ToDoListItemType) => {
    const [itemText, setItemText] = useState(text);
    const [toDoChecked, setToDoChecked] = useState(checkbox);

    return (
        <div style={{ width: '100%', borderRadius: '10px', display: 'flex', padding: '10px', boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.3)' }}>
            <span key={itemKey} style={{ marginTop: 'auto', marginBottom: 'auto', flexDirection: 'row', display: 'flex', width: '100%' }}>

                <div style={{ marginTop: 'auto', marginBottom: 'auto', width: '15%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <CustomCheckBox
                            toDoChecked={toDoChecked}
                            itemKey={itemKey}
                            setChangedToDoItem={setChangedToDoItem}
                            setToDoChecked={setToDoChecked}
                            setItemText={setItemText}
                        />
                    </div>
                </div>
                <div style={{ width: '75%' }}>
                    <label htmlFor={`text${itemKey}`} />
                    <input
                        style={{ width: '100%', padding: '10px', border: '1px solid #fff' }}
                        id={`text${itemKey}`}
                        type='text' value={itemText} placeholder='Enter to-do here'
                        onChange={e => handleToDoContentChange(
                            e.target.value, itemKey, setItemText, setChangedToDoItem, setToDoChecked)}
                    />
                </div>

                <div style={{ marginTop: 'auto', marginBottom: 'auto', width: '10%', marginLeft: '40px' }}>
                    <DeleteButton
                        allToDos={allToDos}
                        setAllToDos={setAllToDos}
                        itemKey={itemKey}
                    />
                </div>
            </span>
        </div>
    );
};

export default ToDoListItem;
