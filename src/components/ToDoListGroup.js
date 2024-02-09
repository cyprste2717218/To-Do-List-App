import React from 'react';

import ToDoListItem from './ToDoListItem';

const ToDoListGroup = ({
    allToDos,
    setAllToDos,
    onUpdatedToDoItem,
    sortStatus
  }) => {
    const allKeys = Object.keys(localStorage);
    const orderedKeys = allKeys.map(num => Number.parseInt(num, 10)).sort((a, b) => a - b);
    let newKeys = [];

    if (sortStatus) { // could do with allowing completed todos to go at the end of the completed pile, rather than being specifically sorted based on index
      const orderedKeysCopy = orderedKeys;
      const checkedToDoKeys = orderedKeysCopy.filter(toDoKey => JSON.parse(localStorage.getItem(toDoKey))[0]);
      const uncheckedToDoKeys = orderedKeysCopy.filter(toDoKey => !checkedToDoKeys.includes(toDoKey));
      const sortedKeys = checkedToDoKeys.concat(uncheckedToDoKeys);
      newKeys = sortedKeys;
    } else {
      newKeys = orderedKeys;
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: 'calc(100vh - 300px)', overflowY: 'scroll'}}>
            <div id='to-do-group-div'>
                {newKeys.map(index => {
              return (
                  <ToDoListItem
                      key={index}
                      itemKey={index}
                      setChangedToDoItem={onUpdatedToDoItem}
                      text={JSON.parse(localStorage.getItem(index))[1]}
                      checkbox={JSON.parse(localStorage.getItem(index))[0]}
                      allToDos={allToDos}
                      setAllToDos={setAllToDos}
              />
);
          })}
            </div>
        </div>

    );
  };

  export default ToDoListGroup;
