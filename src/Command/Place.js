import AbstractCommand from "./AbstractCommand";

export default class extends AbstractCommand {
	/**
	 * Places the toy on the table
	 * @param {CommandTupple} commandTupple
	 */
	static Execute(commandTupple) {
		return commandTupple;
	}
}
