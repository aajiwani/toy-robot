export default class {
	/**
	 * Creates a table with X * Y dimensions
	 * @param {int} numBoxX
	 * @param {int} numBoxY
	 */
	constructor(numBoxX, numBoxY) {
		this.limitX = numBoxX;
		this.limitY = numBoxY;
	}

	/**
	 * Gets the size of table
	 */
	get Size() {
		return {
			x: this.limitX,
			y: this.limitY,
		};
	}
}
