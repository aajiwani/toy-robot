export default class {
	/**
	 * Creates a table with X * Y dimensions
	 * @param {int} numBoxX
	 * @param {int} numBoxY
	 */
	constructor(numBoxX, numBoxY) {
		if (numBoxX <= 0 || numBoxY <= 0) throw new Error("A table needs a physical area to be called a table");

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

	/**
	 * Gets the safe boundary for the table
	 */
	get Boundary() {
		return {
			x1: 0,
			y1: 0,
			x2: this.limitX - 1,
			y2: this.limitY - 1,
		};
	}
}
