"use strict";

import Direction from "@app/src/Helpers/Direction";
import CommandTupple from "@app/src/Command/CommandTupple";
import Commands from "@app/src/Command";
import {expect} from "chai";

describe("Command: Place", () => {
  describe("Given any point and direction", () => {
    it("Should place robot on the same settings", () => {
      let result = Commands.Place.Execute(
        new CommandTupple(1, 2, Direction.NORTH)
      );
      expect(result).to.be.a("CommandTupple");
      expect(result)
        .to.have.property("X")
        .eq(1);
      expect(result)
        .to.have.property("Y")
        .eq(2);
      expect(result)
        .to.have.property("Direction")
        .eq(Direction.NORTH);
    });
  });
});
