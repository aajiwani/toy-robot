import prompt from "prompt";
import CommandExecutor from "@app/src/RobotController/CommandExecutor";
import RobotController from "@app/src/RobotController";
import Table from "@app/src/Table";
import _ from "lodash";

let robotController = new RobotController(new Table(5, 5));

function ask() {
  prompt.get(["command"], (err, result) => {
    if (err) throw err;

    if (_.isEqual(result.command.toLowerCase(), "exit")) {
      return;
    }

    let output = CommandExecutor.ParseAndExecute(
      result.command,
      robotController
    );
    if (typeof output !== "boolean") {
      console.log(output);
    }
    ask();
  });
}

console.log("You can exit any time issuing EXIT command.");
prompt.start();
ask();
