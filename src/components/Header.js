import React from 'react';

import MoreOptionsButton from './MoreOptionsButton';

const Header = () => {
    return (
        <div style={{
            width: '100vw', height: '100px', backgroundColor: '#ADD8E6',
            display: 'flex', flexDirection: 'row', position: 'sticky', top: '0'
      }}
        >

            <div style={{display: 'flex', justifyContent: 'left', width: '80vw', paddingLeft: '30px', color: '#fff'}}>
                <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <h1>To-Do List App</h1>
                </div>

            </div>
            <div style={{width: '20vw', display: 'flex', justifyContent: 'center'}}>
                <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <MoreOptionsButton />
                </div>

            </div>

        </div>

    );
};

export default Header;
