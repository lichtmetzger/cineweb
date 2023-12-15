// eslint-disable-next-line no-unused-vars
class LocalStorage {
	constructor() {
		this.allowedKeys = [
			'cinemaId',
			'cinemaName'
		];
	}

	addValue(key, value) {
		if (this.allowedKeys.includes(key)) {
			localStorage.setItem(key, JSON.stringify(value));
		} else {
			// eslint-disable-next-line no-console
			console.error(`Key "${key}" is not allowed.`);
		}
	}

	getValue(key) {
		return JSON.parse(localStorage.getItem(key));
	}

	getAllValues() {
		this.allowedKeys.forEach((key) =>
			// eslint-disable-next-line no-console
			console.log(key + ': ' + this.getValue(key))
		);
	}
}

export default LocalStorage;