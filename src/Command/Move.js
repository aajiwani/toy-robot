import AbstractCommand from "./AbstractCommand";
import Direction from "@app/src/Helpers/Direction";
import CommandTupple from "./CommandTupple";

export default class extends AbstractCommand {
	/**
	 * Moves toy one unit further in the same direction
	 * @param {CommandTupple} commandTupple
	 */
	static Execute(commandTupple) {
		let newX = commandTupple.X;
		let newY = commandTupple.Y;

		switch (commandTupple.Direction) {
			case Direction.EAST:
				newX += 1;
				break;

			case Direction.WEST:
				newX -= 1;
				break;

			case Direction.NORTH:
				newY += 1;
				break;

			case Direction.SOUTH:
				newY -= 1;
				break;
		}

		return new CommandTupple(newX, newY, commandTupple.Direction);
	}
}
