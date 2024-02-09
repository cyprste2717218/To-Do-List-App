import React from 'react';

const SortingByCompletionButton = ({sortStatus, setSortStatus}) => {
    return (
        <div id='sortingByCompletionButton'>
            <p style={{marginTop: '18px'}}>Sort By Completed</p>
            <input style={{width: '15px', height: '15px', marginTop: '20px'}} type='checkbox' checked={sortStatus} onChange={e => setSortStatus(e.target.checked)} />
        </div>

    );
};

export default SortingByCompletionButton;
