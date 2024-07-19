import React, { useState, useEffect } from 'react';

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
    const [numRows, setNumRows] = useState(1);
    const [toDoChecked, setToDoChecked] = useState(checkbox);
    const viewportWidth = window.innerWidth;

    useEffect(() => {

        let customNumRows;

        switch (true) {
            case viewportWidth <= 320:
                customNumRows = 14;
                break;
            case viewportWidth > 320 && viewportWidth <= 375:
                customNumRows = 19;
                break;
            case viewportWidth > 375 && viewportWidth <= 425:
                customNumRows = 23;
                break;
            case viewportWidth > 425 && viewportWidth <= 768:
                customNumRows = 47;
                break;
            case viewportWidth > 768 && viewportWidth <= 1024:
                customNumRows = 66;
                break;
            case viewportWidth > 1024 && viewportWidth <= 1440:
                customNumRows = 98;
                break;
            case viewportWidth > 1440 && viewportWidth <= 2560:
                customNumRows = 194;
                break;
            default:
                console.warn('No viewport width detected');
                break;
        }
        const maxNumRows = Math.ceil(Math.max(1, itemText.length / customNumRows));

        setNumRows(maxNumRows);
    }, [itemText, viewportWidth])



    return (
        <div style={{width: '100%', borderRadius: '10px', display: 'flex', padding: '10px', boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.3)'}}>
            <span key={itemKey} style={{marginTop: 'auto', marginBottom: 'auto', flexDirection: 'row', display: 'flex', width: '100%'}}>

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
                    <textarea
                        style={{ width: '100%', padding: '10px', border: '1px solid #fff', resize: 'none' }}
                        id={`text${itemKey}`}
                        type='text' value={itemText} placeholder='Enter to-do here'
                        rows={numRows}
                        onChange={e => handleToDoContentChange(
                            e.target.value, itemKey, setItemText, setChangedToDoItem, setToDoChecked)}
                    />
                </div>

                <div style={{marginTop: 'auto', marginBottom: 'auto', width: '10%', marginLeft: '40px'}}>
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
