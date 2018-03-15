"use strict";

import Direction from "@app/src/Helpers/Direction";
import CommandTupple from "@app/src/Command/CommandTupple";
import Commands from "@app/src/Command";
import {expect} from "chai";

describe("Command: Move", () => {
  describe("Move towards East", () => {
    it("Should move from (1, 2) to (2, 2) given west direction", () => {
      let result = Commands.Move.Execute(
        new CommandTupple(1, 2, Direction.EAST)
      );
      expect(result).to.be.a("CommandTupple");
      expect(result)
        .to.have.property("X")
        .eq(2);
      expect(result)
        .to.have.property("Y")
        .eq(2);
      expect(result)
        .to.have.property("Direction")
        .eq(Direction.EAST);
    });
  });

  describe("Move towards West", () => {
    it("Should move from (1, 2) to (0, 2) given west direction", () => {
      let result = Commands.Move.Execute(
        new CommandTupple(1, 2, Direction.WEST)
      );
      expect(result).to.be.a("CommandTupple");
      expect(result)
        .to.have.property("X")
        .eq(0);
      expect(result)
        .to.have.property("Y")
        .eq(2);
      expect(result)
        .to.have.property("Direction")
        .eq(Direction.WEST);
    });
  });

  describe("Move towards North", () => {
    it("Should move from (1, 2) to (1, 3) given west direction", () => {
      let result = Commands.Move.Execute(
        new CommandTupple(1, 2, Direction.NORTH)
      );
      expect(result).to.be.a("CommandTupple");
      expect(result)
        .to.have.property("X")
        .eq(1);
      expect(result)
        .to.have.property("Y")
        .eq(3);
      expect(result)
        .to.have.property("Direction")
        .eq(Direction.NORTH);
    });
  });

  describe("Move towards South", () => {
    it("Should move from (1, 2) to (1, 1) given west direction", () => {
      let result = Commands.Move.Execute(
        new CommandTupple(1, 2, Direction.SOUTH)
      );
      expect(result).to.be.a("CommandTupple");
      expect(result)
        .to.have.property("X")
        .eq(1);
      expect(result)
        .to.have.property("Y")
        .eq(1);
      expect(result)
        .to.have.property("Direction")
        .eq(Direction.SOUTH);
    });
  });
});
