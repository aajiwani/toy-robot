"use strict";

import Direction from "@app/src/Helpers/Direction";
import CommandTupple from "@app/src/Command/CommandTupple";
import Commands from "@app/src/Command";
import RobotController from "@app/src/RobotController";
import Table from "@app/src/Table";
import { expect } from "chai";

describe("Safe robot controller", () => {
	describe("Given the robot is not present", () => {
		let rbController = null;

		beforeEach(() => {
			let table = new Table(5, 5);
			rbController = new RobotController(table);
		});

		it("Should create one and place it on the table", () => {
			expect(rbController.PlaceRobot(3, 3, Direction.NORTH)).to.be.true;
		});

		it("Shouldn't let the robot be placed outside table from north", () => {
			expect(rbController.PlaceRobot(0, 5, Direction.EAST)).to.be.false;
			expect(rbController.PlaceRobot(1, 6, Direction.WEST)).to.be.false;
			expect(rbController.PlaceRobot(2, 7, Direction.NORTH)).to.be.false;
			expect(rbController.PlaceRobot(3, 8, Direction.SOUTH)).to.be.false;
			expect(rbController.PlaceRobot(4, 9, Direction.EAST)).to.be.false;
		});

		it("Shouldn't let the robot be placed outside table from south", () => {
			expect(rbController.PlaceRobot(0, -1, Direction.EAST)).to.be.false;
			expect(rbController.PlaceRobot(1, -2, Direction.WEST)).to.be.false;
			expect(rbController.PlaceRobot(2, -3, Direction.NORTH)).to.be.false;
			expect(rbController.PlaceRobot(3, -4, Direction.SOUTH)).to.be.false;
			expect(rbController.PlaceRobot(4, -5, Direction.EAST)).to.be.false;
		});

		it("Shouldn't let the robot be placed outside table from east", () => {
			expect(rbController.PlaceRobot(5, 0, Direction.EAST)).to.be.false;
			expect(rbController.PlaceRobot(6, 1, Direction.WEST)).to.be.false;
			expect(rbController.PlaceRobot(7, 2, Direction.NORTH)).to.be.false;
			expect(rbController.PlaceRobot(8, 3, Direction.SOUTH)).to.be.false;
			expect(rbController.PlaceRobot(9, 4, Direction.EAST)).to.be.false;
		});

		it("Shouldn't let the robot be placed outside table from west", () => {
			expect(rbController.PlaceRobot(-1, 0, Direction.EAST)).to.be.false;
			expect(rbController.PlaceRobot(-2, 1, Direction.WEST)).to.be.false;
			expect(rbController.PlaceRobot(-3, 2, Direction.NORTH)).to.be.false;
			expect(rbController.PlaceRobot(-4, 3, Direction.SOUTH)).to.be.false;
			expect(rbController.PlaceRobot(-5, 4, Direction.EAST)).to.be.false;
		});

		it("Should ignore move command before placing the robot", () => {
			expect(rbController.MoveRobot()).to.be.false;
		});

		it("Should ignore left command before placing the robot", () => {
			expect(rbController.TurnRobotLeft()).to.be.false;
		});

		it("Should ignore right command before placing the robot", () => {
			expect(rbController.TurnRobotRight()).to.be.false;
		});

		it("Should ignore report command before placing the robot", () => {
			expect(rbController.GetRobotStatus()).to.be.null;
		});
	});
});
