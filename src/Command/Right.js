import AbstractCommand from "./AbstractCommand";
import Direction from "@app/src/Helpers/Direction";
import CommandTupple from "./CommandTupple";

export default class extends AbstractCommand {
	/**
	 * Turns the toy to right
	 * @param {CommandTupple} commandTupple
	 */
	static Execute(commandTupple) {
		let newDir = null;
		switch (commandTupple.Direction) {
			case Direction.EAST:
				newDir = Direction.SOUTH;
				break;

			case Direction.WEST:
				newDir = Direction.NORTH;
				break;

			case Direction.NORTH:
				newDir = Direction.EAST;
				break;

			case Direction.SOUTH:
				newDir = Direction.WEST;
				break;
		}

		return new CommandTupple(commandTupple.X, commandTupple.Y, newDir);
	}
}
