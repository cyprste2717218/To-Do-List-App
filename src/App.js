
import React, {useState} from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ToDoListGroup from './components/ToDoListGroup.js';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DeleteAllToDosButton from './components/DeleteAllToDosButton.js';
import SortingByCompletionButton from './components/SortingByCompletionButton.js';

const ToDoApp = () => {
  const [allToDos, setAllToDos] = useState(localStorage);
  const [sortStatus, setSortStatus] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Offcanvas show={show} onHide={handleClose} placement='bottom' style={{borderRadius: '20px 20px 0 0'}}> 
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Options</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   <DeleteAllToDosButton
                     setAllToDos={setAllToDos}
                     allToDos={allToDos}
                   />
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
