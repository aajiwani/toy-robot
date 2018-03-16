import AbstractCommand from "./AbstractCommand";
import _ from "lodash";

export default class extends AbstractCommand {
  /**
   * Parses: REPORT
   * @param {string} commandText Command text to parse
   * @param {RobotController} controller The robot controller
   */
  ParseAndExecute(commandText, controller) {
    let reg = /^\s*REPORT\s*$/gim;
    let result = reg.exec(commandText);
    if (!_.isEmpty(result)) return controller.GetRobotStatus();
    return false;
  }
}
