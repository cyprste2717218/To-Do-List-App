export default function deleteToDo(allToDos, setAllToDos, itemKey) {
    const copyAllToDos = {...allToDos};
    delete copyAllToDos[itemKey];
    setAllToDos(copyAllToDos);

    // deleting to-do from localStorage

    localStorage.removeItem(itemKey);
  }
