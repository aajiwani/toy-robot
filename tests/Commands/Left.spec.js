"use strict";

import Direction from "@app/src/Helpers/Direction";
import CommandTupple from "@app/src/Command/CommandTupple";
import Commands from "@app/src/Command";
import {expect} from "chai";

describe("Command: Left", () => {
  describe("Given any point with direction North", () => {
    it("Should turn to direction West", () => {
      let result = Commands.Left.Execute(
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
        .eq(Direction.WEST);
    });
  });

  describe("Given any point with direction South", () => {
    it("Should turn to direction East", () => {
      let result = Commands.Left.Execute(
        new CommandTupple(1, 2, Direction.SOUTH)
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
        .eq(Direction.EAST);
    });
  });

  describe("Given any point with direction East", () => {
    it("Should turn to direction North", () => {
      let result = Commands.Left.Execute(
        new CommandTupple(1, 2, Direction.EAST)
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

  describe("Given any point with direction West", () => {
    it("Should turn to direction South", () => {
      let result = Commands.Left.Execute(
        new CommandTupple(1, 2, Direction.WEST)
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
        .eq(Direction.SOUTH);
    });
  });
});
