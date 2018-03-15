import _ from "lodash";
import Commands from "@app/src/Command";
import CommandTupple from "@app/src/Command/CommandTupple";
/**
 * An intelligent controller for our robot
 * Whatever happens, it won't let the robot fall
 */
export default class {
  /**
   * This will initiate the controller
   * Knowing the boudary of the table
   * @param {Table} table
   */
  constructor(table) {
    this.table = table;
    this.robot = null;
  }

  /**
   * Let's the action be executed if robot is present
   */
  _shallExecute() {
    return !_.isEmpty(this.robot);
  }

  /**
   * Have the logic to not let robot fall the table
   * @param {CommandTupple} commandOutput The output tupple of command execution
   */
  _safeToExecute(commandOutput) {
    let tableBoundaries = this.table.Boundary;
    return (
      commandOutput.X <= tableBoundaries.x2 &&
      commandOutput.X >= tableBoundaries.x1 &&
      commandOutput.Y <= tableBoundaries.y2 &&
      commandOutput.Y >= tableBoundaries.y1
    );
  }

  /**
   * Changes the robot state to the output of command
   * @param {CommandTupple} commandTupple   The output of the command
   */
  _changeRobotState(commandTupple) {
    this.robot = {position: commandTupple};
    return true;
  }

  /**
   * Tries to safely execute the command
   * @param {Command} command   The command to execute
   */
  _executeCommand(command) {
    if (this._shallExecute()) {
      let commandResult = command.Execute.apply(null, this.robot.position);
      if (this._safeToExecute(commandResult)) {
        return this._changeRobotState(commandResult);
      }
    }
    return false;
  }

  /**
   * Action to move the robot facing the same direction
   */
  MoveRobot() {
    return this._executeCommand(Commands.Move);
  }

  /**
   * Action to move the current direction of the robot
   */
  TurnRobotLeft() {
    return this._executeCommand(Commands.Left);
  }

  /**
   * Action to move the current direction of the robot
   */
  TurnRobotRight() {
    return this._executeCommand(Commands.Right);
  }

  /**
   * Get's the status of robot (if present)
   */
  GetRobotStatus() {
    if (this._shallExecute()) {
      return this.robot.position;
    }
    return null;
  }
  /**
   *
   * @param {int} x The X-Axis for robot to be placed
   * @param {int} y The Y-Axis for robot to be placed
   * @param {Direct} direction  The direction to face
   */
  PlaceRobot(x, y, direction) {
    let result = Commands.Place.Execute(new CommandTupple(x, y, direction));
    if (this._safeToExecute(result)) {
      return this._changeRobotState(result);
    }
    return false;
  }
}
