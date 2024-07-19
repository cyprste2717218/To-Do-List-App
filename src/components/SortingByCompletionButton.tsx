import React from 'react';
import Switch from 'react-switch';

type SortingByCompletionButtonType = {
    sortStatus: boolean,
    setSortStatus: any
}

const SortingByCompletionButton = ({ sortStatus, setSortStatus }: SortingByCompletionButtonType) => {
    return (
        <div id='sortingByCompletionButton'>
            <label>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    <p style={{ marginTop: '18px' }}>Sort By Completed</p>
                    <div style={{ marginTop: 'auto', marginBottom: 'auto', paddingTop: '10px', paddingLeft: '10px' }}>
                        <Switch checked={sortStatus} onChange={e => setSortStatus(e)} />
                    </div>

                </div>
            </label>

        </div>

    );
};

export default SortingByCompletionButton;
