import AbstractCommand from "./AbstractCommand";
import Direction from "@app/src/Helpers/Direction";
import _ from "lodash";

export default class extends AbstractCommand {
	/**
	 * Parses: REPORT
	 * @param {string} commandText Command text to parse
	 * @param {RobotController} controller The robot controller
	 */
	ParseAndExecute(commandText, controller) {
		let reg = /^REPORT\s*$/gim;
		let result = commandText.exec(reg);
		if (!_.isEmpty(result)) return controller.GetRobotStatus();
		return false;
	}
}
