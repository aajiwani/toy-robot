export default class {
	/**
	 * Constructs a command input or output
	 * @param {int} x
	 * @param {int} y
	 * @param {Direction} direction
	 */
	constructor(x, y, direction) {
		this.x = x;
		this.y = y;
		this.direction = direction;
	}

	/**
	 * Returns X axis of the command tupple
	 */
	get X() {
		return this.x;
	}

	/**
	 * Returns Y axis of the command tupple
	 */
	get Y() {
		return this.y;
	}

	/**
	 * Returns initials of the direction
	 */
	get Direction() {
		return this.direction;
	}

	/**
	 * Supports chai to check for type
	 */
	get [Symbol.toStringTag]() {
		return "CommandTupple";
	}
}
