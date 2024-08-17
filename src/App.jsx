
import React, {useState} from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Offcanvas from 'react-bootstrap/Offcanvas';

import DeleteAllToDosButton from './components/DeleteAllToDosButton.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import SortingByCompletionButton from './components/SortingByCompletionButton.js';
import ToDoListGroup from './components/ToDoListGroup.js';
import checkAndClearLocalStorage from './utilities/checkClearLocalStorage.js';

const ToDoApp = () => {
  const [allToDos, setAllToDos] = useState(localStorage);
  const [sortStatus, setSortStatus] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  checkAndClearLocalStorage();
  return (
      <>
          <Header handleShow={handleShow} />

          <ToDoListGroup
              allToDos={allToDos}
              setAllToDos={setAllToDos}
              sortStatus={sortStatus}
              onUpdatedToDoItem={setAllToDos}
            />
          <div style={{position: 'absolute', bottom: '0', width: '100%'}} >
              <Footer
                  allToDos={allToDos}
                  setAllToDos={setAllToDos}
                  sortStatus={sortStatus}
                  setSortStatus={setSortStatus}

                />
          </div>
          <Offcanvas data-test='off-canvas-drawer' show={show} placement='bottom' style={{borderRadius: '20px 20px 0 0'}} onHide={handleClose}>
              <Offcanvas.Header closeButton={true}>
                  <Offcanvas.Title>Options</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <br />
                  <DeleteAllToDosButton
                      setAllToDos={setAllToDos}
                      allToDos={allToDos}
                   />
                  <br />
                  <SortingByCompletionButton
                      setSortStatus={setSortStatus}
                      sortStatus={sortStatus}
                   />
              </Offcanvas.Body>
          </Offcanvas>
      </>
  );
};

export default ToDoApp;
