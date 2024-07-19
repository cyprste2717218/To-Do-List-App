import React from 'react';

import AddToDoButton from './AddToDoButton.tsx';

type FooterType = {
    allToDos: Object;
    setAllToDos: React.SetStateAction<Object>;
}

const Footer = ({ allToDos, setAllToDos }: FooterType) => {
    return (
        <div id='footer'>
            <div style={{ display: 'flex', justifyContent: 'right', paddingRight: '20px', paddingTop: '0px' }}>
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
