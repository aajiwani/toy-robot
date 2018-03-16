"use strict";

import Direction from "@app/src/Helpers/Direction";
import CommandTupple from "@app/src/Command/CommandTupple";
import Commands from "@app/src/Command";
import RobotController from "@app/src/RobotController";
import Table from "@app/src/Table";
import { expect } from "chai";

describe("Safe robot controller", () => {
	describe("Given the robot is present", () => {
		let rbController = null;

		beforeEach(() => {
			let table = new Table(5, 5);
			rbController = new RobotController(table);
			expect(rbController.PlaceRobot(3, 3, Direction.NORTH)).to.be.true;
		});

		it("Should place it anywhere else on demand, on the table", () => {
			expect(rbController.PlaceRobot(4, 3, Direction.NORTH)).to.be.true;
		});

		it("Should let the robot move on the table", () => {
			expect(rbController.MoveRobot()).to.be.true;
		});

		it("Should let the robot turn left on the table", () => {
			expect(rbController.TurnRobotLeft()).to.be.true;

			// Check at the edges
			expect(rbController.PlaceRobot(4, 4, Direction.NORTH)).to.be.true;
			expect(rbController.TurnRobotLeft()).to.be.true;

			expect(rbController.PlaceRobot(0, 4, Direction.NORTH)).to.be.true;
			expect(rbController.TurnRobotLeft()).to.be.true;

			expect(rbController.PlaceRobot(0, 0, Direction.NORTH)).to.be.true;
			expect(rbController.TurnRobotLeft()).to.be.true;

			expect(rbController.PlaceRobot(4, 0, Direction.NORTH)).to.be.true;
			expect(rbController.TurnRobotLeft()).to.be.true;
			// Check at the edges
		});

		it("Should let the robot turn right on the table", () => {
			expect(rbController.TurnRobotRight()).to.be.true;

			// Check at the edges
			expect(rbController.PlaceRobot(4, 4, Direction.NORTH)).to.be.true;
			expect(rbController.TurnRobotRight()).to.be.true;

			expect(rbController.PlaceRobot(0, 4, Direction.NORTH)).to.be.true;
			expect(rbController.TurnRobotRight()).to.be.true;

			expect(rbController.PlaceRobot(0, 0, Direction.NORTH)).to.be.true;
			expect(rbController.TurnRobotRight()).to.be.true;

			expect(rbController.PlaceRobot(4, 0, Direction.NORTH)).to.be.true;
			expect(rbController.TurnRobotRight()).to.be.true;
			// Check at the edges
		});

		it("Should announce robot's position", () => {
			let output = rbController.GetRobotStatus();

			expect(output).to.not.be.null;
			expect(output).to.be.a("CommandTupple");
			expect(output)
				.to.have.property("X")
				.eq(3);
			expect(output)
				.to.have.property("Y")
				.eq(3);
			expect(output)
				.to.have.property("Direction")
				.eq(Direction.NORTH);
		});
	});
});
