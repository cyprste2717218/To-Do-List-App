import React from 'react';

const Header = () => {
    return (
        <div style={{
            width: '100%', height: '100px', backgroundColor: '#ADD8E6', color: 'white',
            display: 'flex', justifyContent: 'center', position: 'sticky', top: '0'
      }}
        >
            <span>

                <h1>To-Do List App</h1>
            </span>

        </div>

    );
};

export default Header;
