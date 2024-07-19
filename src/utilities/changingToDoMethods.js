
export default function handleToDoContentChange(data, itemKey, setItemText, setChangedToDoItem, setToDoChecked) { // Issue with using data from updated state values , doesn't transmit all data for strings and sends on wrong checkbox value

	if (data.length === 15) {
		setItemText(data + '//n');
	}

	if (typeof (data) === 'string') {
		setItemText(data);
		changeToDoItem([data, itemKey, 'string'], setChangedToDoItem);
	} else if (typeof (data) === 'boolean') {
		setToDoChecked(data);
		changeToDoItem([data, itemKey, 'boolean'], setChangedToDoItem);
	}
}

export function changeToDoItem(data, setChangedToDoItem) {
	const [givenVal, itemKey, dataType] = data;

	const currentValue = localStorage.getItem(itemKey);
	const updatedToDoItemArr = JSON.parse(currentValue);

	if (dataType === 'boolean') {
		updatedToDoItemArr[0] = givenVal;
	} else if (dataType === 'string') {
		updatedToDoItemArr[1] = givenVal;
	}

	const updatedToDo = {};
	updatedToDo[itemKey] = JSON.stringify(updatedToDoItemArr);
	localStorage.setItem(itemKey, updatedToDo[itemKey]);

	const updatedLocalStorage = {...localStorage};

	return setChangedToDoItem(updatedLocalStorage);
	// Test: console.log("Copy all to dos after:", copyAllToDos[itemKey]);
}
