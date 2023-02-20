export default class ElementManager {
	constructor(elements) {
		this.elements = {};
		for (let element in elements) {
			this.elements[element] =
				document.querySelector(elements[element]) ?? element[element];
		}
	}
	get(name, selector) {
		const element = this.elements[name];
		if (element instanceof HTMLElement) {
			return this.elements[name];
		} else if (selector) {
			const searchedElement = document.querySelector(selector);

			if (!searchedElement) throw new Error(`Element ${name} not found`);
			this.elements[name] = searchedElement;
			return searchedElement;
		} else {
			const searchedElement = document.querySelector(this.elements[name]);
			this.elements[name] = searchedElement;

			if (!searchedElement) throw new Error(`Element ${name} not found`);
			return searchedElement;
		}
	}
	add(name, selector) {
		const searchedElement = document.querySelector(selector) ?? selector;
		this.elements[name] = searchedElement;
	}

	getMultiple(elements) {
		const foundElements = [];
		for (let element of elements) {
			foundElements.push(this.get(element));
		}
		return foundElements;
	}
}
