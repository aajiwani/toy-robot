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

		it("Shouldn't let robot fall from the table from left top", () => {
			let output = null;

			expect(rbController.PlaceRobot(0, 4, Direction.WEST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			output = rbController.GetRobotStatus();

			expect(output).to.not.be.null;
			expect(output).to.be.a("CommandTupple");
			expect(output)
				.to.have.property("X")
				.eq(0);
			expect(output)
				.to.have.property("Y")
				.eq(4);
			expect(output)
				.to.have.property("Direction")
				.eq(Direction.WEST);

			expect(rbController.PlaceRobot(0, 4, Direction.NORTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			output = rbController.GetRobotStatus();

			expect(output).to.not.be.null;
			expect(output).to.be.a("CommandTupple");
			expect(output)
				.to.have.property("X")
				.eq(0);
			expect(output)
				.to.have.property("Y")
				.eq(4);
			expect(output)
				.to.have.property("Direction")
				.eq(Direction.NORTH);
		});

		it("Shouldn't let robot fall from the table from left bottom", () => {
			let output = null;

			expect(rbController.PlaceRobot(0, 0, Direction.WEST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			output = rbController.GetRobotStatus();

			expect(output).to.not.be.null;
			expect(output).to.be.a("CommandTupple");
			expect(output)
				.to.have.property("X")
				.eq(0);
			expect(output)
				.to.have.property("Y")
				.eq(0);
			expect(output)
				.to.have.property("Direction")
				.eq(Direction.WEST);

			expect(rbController.PlaceRobot(0, 0, Direction.SOUTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			output = rbController.GetRobotStatus();

			expect(output).to.not.be.null;
			expect(output).to.be.a("CommandTupple");
			expect(output)
				.to.have.property("X")
				.eq(0);
			expect(output)
				.to.have.property("Y")
				.eq(0);
			expect(output)
				.to.have.property("Direction")
				.eq(Direction.SOUTH);
		});

		it("Shouldn't let robot fall from the table from right top", () => {
			let output = null;

			expect(rbController.PlaceRobot(4, 4, Direction.EAST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			output = rbController.GetRobotStatus();

			expect(output).to.not.be.null;
			expect(output).to.be.a("CommandTupple");
			expect(output)
				.to.have.property("X")
				.eq(4);
			expect(output)
				.to.have.property("Y")
				.eq(4);
			expect(output)
				.to.have.property("Direction")
				.eq(Direction.EAST);

			expect(rbController.PlaceRobot(4, 4, Direction.NORTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			output = rbController.GetRobotStatus();

			expect(output).to.not.be.null;
			expect(output).to.be.a("CommandTupple");
			expect(output)
				.to.have.property("X")
				.eq(4);
			expect(output)
				.to.have.property("Y")
				.eq(4);
			expect(output)
				.to.have.property("Direction")
				.eq(Direction.NORTH);
		});

		it("Shouldn't let robot fall from the table from right bottom", () => {
			let output = null;

			expect(rbController.PlaceRobot(4, 0, Direction.EAST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			output = rbController.GetRobotStatus();

			expect(output).to.not.be.null;
			expect(output).to.be.a("CommandTupple");
			expect(output)
				.to.have.property("X")
				.eq(4);
			expect(output)
				.to.have.property("Y")
				.eq(0);
			expect(output)
				.to.have.property("Direction")
				.eq(Direction.EAST);

			expect(rbController.PlaceRobot(4, 0, Direction.SOUTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			output = rbController.GetRobotStatus();

			expect(output).to.not.be.null;
			expect(output).to.be.a("CommandTupple");
			expect(output)
				.to.have.property("X")
				.eq(4);
			expect(output)
				.to.have.property("Y")
				.eq(0);
			expect(output)
				.to.have.property("Direction")
				.eq(Direction.SOUTH);
		});

		it("Shouldn't let robot fall from the table from south", () => {
			let output = null;

			expect(rbController.PlaceRobot(4, 0, Direction.SOUTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(3, 0, Direction.SOUTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(2, 0, Direction.SOUTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(1, 0, Direction.SOUTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(0, 0, Direction.SOUTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;
		});

		it("Shouldn't let robot fall from the table from north", () => {
			let output = null;

			expect(rbController.PlaceRobot(0, 4, Direction.NORTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(1, 4, Direction.NORTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(2, 4, Direction.NORTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(3, 4, Direction.NORTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(4, 4, Direction.NORTH)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;
		});

		it("Shouldn't let robot fall from the table from east", () => {
			let output = null;

			expect(rbController.PlaceRobot(4, 0, Direction.EAST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(4, 1, Direction.EAST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(4, 2, Direction.EAST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(4, 3, Direction.EAST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(4, 4, Direction.EAST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;
		});

		it("Shouldn't let robot fall from the table from west", () => {
			let output = null;

			expect(rbController.PlaceRobot(0, 0, Direction.WEST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(0, 1, Direction.WEST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(0, 2, Direction.WEST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(0, 3, Direction.WEST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;

			expect(rbController.PlaceRobot(0, 4, Direction.WEST)).to.be.true;
			expect(rbController.MoveRobot()).to.be.false;
		});
	});
});
