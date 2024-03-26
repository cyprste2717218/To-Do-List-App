import React from 'react';

import AddToDoButton from './AddToDoButton';
import DeleteAllToDosButton from './DeleteAllToDosButton';
import SortingByCompletionButton from './SortingByCompletionButton';

const Footer = ({allToDos, setAllToDos, sortStatus, setSortStatus}) => {
    return (
        <div id='footer'>
            <div style={{display: 'flex', justifyContent: 'center'}}>

                <AddToDoButton
                    allToDos={allToDos}
                    onNewToDoItem={setAllToDos}
          />

            </div>
            <div >
                <DeleteAllToDosButton
                    setAllToDos={setAllToDos}
                    allToDos={allToDos}
                />
                <br />
                <SortingByCompletionButton
                    setSortStatus={setSortStatus}
                    sortStatus={sortStatus}
          />
            </div>

        </div>

    );
};

export default Footer;
