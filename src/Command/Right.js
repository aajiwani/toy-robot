import AbstractCommand from "./AbstractCommand";
import Direction from "@app/src/Helpers/Direction";
import CommandTupple from "./CommandTupple";
import _ from "lodash";

export default class extends AbstractCommand {
  /**
   * Turns the toy to right
   * @param {CommandTupple} commandTupple
   */
  static Execute(commandTupple) {
    let directions = [
      Direction.WEST,
      Direction.NORTH,
      Direction.EAST,
      Direction.SOUTH,
    ];

    let result = _.findIndex(directions, item =>
      _.isEqual(item, commandTupple.Direction)
    );
    if (result !== -1) {
      let selDir = null;
      if (result === _.size(directions) - 1) selDir = directions[0];
      else selDir = directions[result + 1];
      return new CommandTupple(commandTupple.X, commandTupple.Y, selDir);
    }
  }
}
