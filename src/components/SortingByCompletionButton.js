import React from 'react';
import Switch from "react-switch";

const SortingByCompletionButton = ({sortStatus, setSortStatus}) => {
    return (
        <div id='sortingByCompletionButton'>
            <label>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                    <p style={{marginTop: '18px'}}>Sort By Completed</p>
                    <div style={{marginTop: 'auto', marginBottom: 'auto', paddingTop: '10px', paddingLeft: '10px'}}>
                        <Switch checked={sortStatus} onChange={e => setSortStatus(e)} />
                    </div>
               
                 </div>
            </label>
          
           
        </div>

    );
};

export default SortingByCompletionButton;
