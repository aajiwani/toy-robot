"use strict";

import Direction from "@app/src/Helpers/Direction";
import CommandTupple from "@app/src/Command/CommandTupple";
import Commands from "@app/src/Command";
import RobotController from "@app/src/RobotController";
import Table from "@app/src/Table";
import {expect} from "chai";

describe("Safe robot controller", () => {
  describe("Given the robot is not present", () => {
    it("Should create one and place it on the table", () => {
      let table = new Table(5, 5);
      let rbController = new RobotController(table);
      expect(rbController.PlaceRobot(3, 3, Direction.NORTH)).to.be.true;
    });
  });
});
