import React from 'react';
import Switch from "react-switch";

const SortingByCompletionButton = ({sortStatus, setSortStatus}) => {
    return (
        <div id='sortingByCompletionButton'>
            <label>
                <p style={{marginTop: '18px'}}>Sort By Completed</p>
                 <Switch checked={sortStatus} onChange={e => setSortStatus(e)} />
            </label>
          
           
        </div>

    );
};

export default SortingByCompletionButton;
