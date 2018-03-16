import AbstractCommand from "./AbstractCommand";
import Direction from "@app/src/Helpers/Direction";
import _ from "lodash";

export default class extends AbstractCommand {
  /**
   * Parses: PLACE X, Y, F
   * @param {string} commandText Command text to parse
   * @param {RobotController} controller The robot controller
   */
  ParseAndExecute(commandText, controller) {
    let reg = /^\s*PLACE\s+([\d]+)\s*,\s*([\d]+)\s*,\s*(east|west|north|south)\s*$/gim;
    let result = reg.exec(commandText);
    if (!_.isEmpty(result)) {
      return controller.PlaceRobot(
        _.toInteger(result[1]),
        _.toInteger(result[2]),
        Direction.Parse(result[3])
      );
    }
    return false;
  }
}
