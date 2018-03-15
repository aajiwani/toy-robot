import Direction from "@app/src/Helpers/Direction";
import _ from "lodash";

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

		if (!_.includes(Direction, direction)) throw new Error("Unknown direction to construct a command tupple");
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
	 * Returns the direction
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
