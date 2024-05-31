export default function deleteAllToDos(setAllToDos, allToDos) {
    setAllToDos({});

    // deleting all keys from localStorage

    const allToDoKeys = Object.keys(allToDos);
    for (const allToDoKey of allToDoKeys) {
      localStorage.removeItem(allToDoKey);
    }
  }
