import React, {useState} from 'react';

import handleToDoContentChange from '../utilities/changingToDoMethods';

import CustomCheckBox from './CustomCheckbox';
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
        <div style={{width: '88vw', border: '1px solid gray', borderRadius: '16px', display: 'flex', padding: '10px'}}>
            <span key={itemKey} style={{marginTop: 'auto', marginBottom: 'auto', flexDirection: 'row', display: 'flex'}}>

                <div style={{marginTop: 'auto', marginBottom: 'auto', width: '15%'}}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <CustomCheckBox
                            toDoChecked={toDoChecked}
                            itemKey={itemKey}
                            setChangedToDoItem={setChangedToDoItem}
                            setToDoChecked={setToDoChecked}
                            setItemText={setItemText}
                        />
                    </div>
                </div>
                <div style={{width: '75%'}}>
                    <label htmlFor={`text${itemKey}`} />
                    <input
                        style={{width: '100%', padding: '10px'}}
                        id={`text${itemKey}`}
                        type='text' value={itemText} onChange={e => handleToDoContentChange(
                    e.target.value, itemKey, setItemText, setChangedToDoItem, setToDoChecked)}
                    />
                </div>

                <div style={{marginTop: 'auto', marginBottom: 'auto', width: '10%'}}>
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
