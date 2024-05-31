export default function createNewToDoItem(onNewToDoItem, allToDos) {
    const numToDos = Object.keys(allToDos).length;

    const lastKeyVal = numToDos === 0 ? 0 : Number.parseInt(Object.keys(allToDos).pop(), 10);

    const newKeyVal = Number.parseInt(lastKeyVal + 1, 10);
    const newToDo = {};
    newToDo[newKeyVal] = [false, ''];

    localStorage.setItem(newKeyVal, JSON.stringify(newToDo[newKeyVal]));
    const updatedLocalStorage = {...localStorage};
    onNewToDoItem(updatedLocalStorage);
  }
