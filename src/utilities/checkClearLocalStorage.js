function checkAndClearLocalStorage() {
	function getRandomKeyValuePair() {
		console.log('numEntries:', numEntries);
		if (numEntries === 0) {
			return null; // No entries in localStorage
		}

		const randomIndex = Math.floor(Math.random() * numEntries); // Generate random index
		if (randomIndex === 'NaN') {
			randomIndex = 1;
		}
		const key = localStorage.key(randomIndex);
		const value = localStorage.getItem(key);
		return {key, value}; // Return the key-value pair at the random index
	}

	// Usage:

	try {
		const randomPair = getRandomKeyValuePair();
		if (randomPair) {
			console.log('Random key:', randomPair.key);
			console.log('Random value:', randomPair.value);
			const randomKey = JSON.parse(randomPair.key);
			const randomValue = JSON.parse(randomPair.value);

		// checking types of key and value

		const isKeyValid = typeof (randomKey) === 'number';
		const isValueValid = (typeof (randomValue[0]) === 'boolean') && (typeof (randomValue[1]) === 'string');
		console.log('results:', isKeyValid, isValueValid);

		if (isKeyValid && isValueValid) {
			console.log('localStorage structure matches expected format');
		} else {
			// Compare the structure of the retrieved data with the expected structure

			console.warn('localStorage structure doesn\'t match. Clearing...');
			localStorage.clear();
		}
		}
	} catch (error) {
		// clearing in case previous format handling logic doesn't work
		localStorage.clear();
		console.error('Error accessing localStorage:', error);
	}
  }

  export default checkAndClearLocalStorage;
