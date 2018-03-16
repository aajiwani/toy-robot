"use strict";

import CommandExecutor from "@app/src/RobotController/CommandExecutor";
import RobotController from "@app/src/RobotController";
import CommandTupple from "@app/src/Command/CommandTupple";
import Table from "@app/src/Table";
import {assert, expect} from "chai";

function commandParse(command, controller) {
  CommandExecutor.ParseAndExecute(command, controller);
  return controller.GetRobotStatus();
}

function generatedTest(test, controller) {
  let result = commandParse.apply(null, [test.command, controller]);
  expect(result).to.be.a("CommandTupple");

  expect(result).to.include(test.expected);
}

describe("System Flow", () => {
  let robotController = null;
  beforeEach(() => {
    robotController = new RobotController(new Table(5, 5));
  });

  it("Command test one", () => {
    let tests = [
      {command: "PLACE 0,0,NORTH", expected: new CommandTupple(0, 0, "NORTH")},
      {command: "MOVE", expected: new CommandTupple(0, 1, "NORTH")},
      {command: "REPORT", expected: new CommandTupple(0, 1, "NORTH")},
    ];

    tests.forEach(test => generatedTest(test, robotController));
  });

  it("Command test two", () => {
    let tests = [
      {command: "PLACE 0,0,NORTH", expected: new CommandTupple(0, 0, "NORTH")},
      {command: "LEFT", expected: new CommandTupple(0, 0, "WEST")},
      {command: "REPORT", expected: new CommandTupple(0, 0, "WEST")},
    ];

    tests.forEach(test => generatedTest(test, robotController));
  });

  it("Command test three", () => {
    let tests = [
      {command: "PLACE 1,2,EAST", expected: new CommandTupple(1, 2, "EAST")},
      {command: "MOVE", expected: new CommandTupple(2, 2, "EAST")},
      {command: "MOVE", expected: new CommandTupple(3, 2, "EAST")},
      {command: "LEFT", expected: new CommandTupple(3, 2, "NORTH")},
      {command: "MOVE", expected: new CommandTupple(3, 3, "NORTH")},
      {command: "REPORT", expected: new CommandTupple(3, 3, "NORTH")},
    ];

    tests.forEach(test => generatedTest(test, robotController));
  });
});
