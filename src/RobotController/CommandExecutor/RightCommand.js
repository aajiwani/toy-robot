import AbstractCommand from "./AbstractCommand";
import Direction from "@app/src/Helpers/Direction";
import _ from "lodash";

export default class extends AbstractCommand {
	/**
	 * Parses: RIGHT
	 * @param {string} commandText Command text to parse
	 * @param {RobotController} controller The robot controller
	 */
	ParseAndExecute(commandText, controller) {
		let reg = /^RIGHT\s*$/gim;
		let result = commandText.exec(reg);
		if (!_.isEmpty(result)) return controller.TurnRobotRight();
		return false;
	}
}
