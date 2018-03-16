"use strict";

import CommandExecutor from "@app/src/RobotController/CommandExecutor";
import {expect} from "chai";
import sinon from "sinon";

describe("Command Executor", () => {
  describe("Place command", () => {
    let rbCtlMock = null;

    beforeEach(() => {
      rbCtlMock = sinon.mock({
        MoveRobot: function() {
          return "Result";
        },
        TurnRobotLeft: function() {
          return "Result";
        },
        TurnRobotRight: function() {
          return "Result";
        },
        GetRobotStatus: function() {
          return "Result";
        },
        PlaceRobot: function() {
          return "Result";
        },
      });
    });

    it("should parse the PLACE command appropriately", () => {
      rbCtlMock
        .expects("PlaceRobot")
        .once()
        .withExactArgs(2, 3, "NORTH");

      rbCtlMock
        .expects("PlaceRobot")
        .once()
        .withExactArgs(3, 3, "SOUTH");

      rbCtlMock
        .expects("PlaceRobot")
        .once()
        .withExactArgs(3, 3, "EAST");

      rbCtlMock
        .expects("PlaceRobot")
        .once()
        .withExactArgs(10, 20, "WEST");

      CommandExecutor.ParseAndExecute("PLACE 2,3,NORTH", rbCtlMock.object);
      CommandExecutor.ParseAndExecute(
        "PLACE 3     , 3, SOUTH",
        rbCtlMock.object
      );
      CommandExecutor.ParseAndExecute(
        "       PLACE 10,20      , WEST",
        rbCtlMock.object
      );
      CommandExecutor.ParseAndExecute(
        "       PLACE 3,       3   , EAST       ",
        rbCtlMock.object
      );
      rbCtlMock.verify();
    });

    it("should parse the MOVE command appropriately", () => {
      rbCtlMock.expects("MoveRobot").twice();

      CommandExecutor.ParseAndExecute("MOVE", rbCtlMock.object);
      CommandExecutor.ParseAndExecute("    MOVE     ", rbCtlMock.object);
      rbCtlMock.verify();
    });

    it("should parse the LEFT command appropriately", () => {
      rbCtlMock.expects("TurnRobotLeft").twice();

      CommandExecutor.ParseAndExecute("LEFT", rbCtlMock.object);
      CommandExecutor.ParseAndExecute("    LEFT     ", rbCtlMock.object);
      rbCtlMock.verify();
    });

    it("should parse the RIGHT command appropriately", () => {
      rbCtlMock.expects("TurnRobotRight").twice();

      CommandExecutor.ParseAndExecute("RIGHT", rbCtlMock.object);
      CommandExecutor.ParseAndExecute("     RIGHT   ", rbCtlMock.object);
      rbCtlMock.verify();
    });

    it("should parse the REPORT command appropriately", () => {
      rbCtlMock.expects("GetRobotStatus").twice();

      CommandExecutor.ParseAndExecute("REPORT", rbCtlMock.object);
      CommandExecutor.ParseAndExecute("      REPORT      ", rbCtlMock.object);
      rbCtlMock.verify();
    });

    it("should return the output same as command execution", () => {
      rbCtlMock.restore();

      expect(
        CommandExecutor.ParseAndExecute("PLACE 2,3,NORTH", rbCtlMock.object)
      ).to.be.equal("Result");
      expect(
        CommandExecutor.ParseAndExecute("MOVE", rbCtlMock.object)
      ).to.be.equal("Result");
      expect(
        CommandExecutor.ParseAndExecute("LEFT", rbCtlMock.object)
      ).to.be.equal("Result");
      expect(
        CommandExecutor.ParseAndExecute("RIGHT", rbCtlMock.object)
      ).to.be.equal("Result");
      expect(
        CommandExecutor.ParseAndExecute("REPORT", rbCtlMock.object)
      ).to.be.equal("Result");
    });

    it("shouldn't call any of the commands", () => {
      rbCtlMock.expects("TurnRobotLeft").never();
      rbCtlMock.expects("MoveRobot").never();
      rbCtlMock.expects("TurnRobotRight").never();
      rbCtlMock.expects("GetRobotStatus").never();
      rbCtlMock.expects("PlaceRobot").never();

      let result = CommandExecutor.ParseAndExecute("BOGUS1", rbCtlMock.object);
      expect(result).to.be.false;

      result = CommandExecutor.ParseAndExecute(
        "  A   R   B  I  T  A  R  Y ",
        rbCtlMock.object
      );
      expect(result).to.be.false;

      result = CommandExecutor.ParseAndExecute(
        "PLACE IT 3,4,NORTH",
        rbCtlMock.object
      );
      expect(result).to.be.false;

      rbCtlMock.verify();
    });
  });
});
