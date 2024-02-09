
import React, {useEffect, useState} from 'react';
import './styles.css';

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ToDoListGroup from './components/ToDoListGroup.js';

const ToDoApp = () => {
  const [allToDos, setAllToDos] = useState(localStorage);
  const [sortStatus, setSortStatus] = useState(true);

  return (
      <div>
          <Header />
          <ToDoListGroup
              allToDos={allToDos}
              setAllToDos={setAllToDos}
              sortStatus={sortStatus}
              onUpdatedToDoItem={setAllToDos}
      />
          <div style={{position: 'absolute', bottom: '0', width: '100%'}}>
              <Footer
                  allToDos={allToDos}
                  setAllToDos={setAllToDos}
                  sortStatus={sortStatus}
                  setSortStatus={setSortStatus}

      />
          </div>

      </div>
  );
};

export default ToDoApp;
