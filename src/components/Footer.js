import React from 'react';

import AddToDoButton from './AddToDoButton';

const Footer = ({allToDos, setAllToDos}) => {
    return (
        <div id='footer'>
            <div style={{display: 'flex', justifyContent: 'right', paddingRight: '20px', paddingTop: '10px'}}>
                <div>
                    <AddToDoButton
                        allToDos={allToDos}
                        onNewToDoItem={setAllToDos}
                    />
                </div>
            </div>
        </div>

    );
};

export default Footer;
