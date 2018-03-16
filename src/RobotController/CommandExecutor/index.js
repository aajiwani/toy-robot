import Right from "./RightCommand";
import Left from "./LeftCommand";
import Move from "./MoveCommand";
import Place from "./PlaceCommand";
import Report from "./ReportCommand";
import _ from "lodash";

let commands = [new Right(), new Left(), new Move(), new Place(), new Report()];

/**
 * A class to parse text to commands and execute it
 * Commands are matched and executed on first come first basis
 */
export default class {
  /**
   * A method to facilitate the execution of command via text
   * @param {string} text Commands coming in from user
   * @param {RobotController} controller Instance controlling robot
   */
  static ParseAndExecute(text, controller) {
    for (let command of commands) {
      let result = command.ParseAndExecute(text, controller);
      if (!_.isEmpty(result)) return result;
    }
    return false;
  }
}
