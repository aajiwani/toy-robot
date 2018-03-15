"use strict";

import CommandTupple from "@app/src/Command/CommandTupple";
import Direction from "@app/src/Helpers/Direction";
import { expect } from "chai";

describe("Creation of Command Tupple", () => {
	it("should create tupple", () => {
		let commandTupple = new CommandTupple(0, 0, Direction.EAST);
		expect(commandTupple).to.be.a("CommandTupple");
		expect(commandTupple)
			.to.have.property("X")
			.eq(0);
		expect(commandTupple)
			.to.have.property("Y")
			.eq(0);
		expect(commandTupple)
			.to.have.property("Direction")
			.eq(Direction.EAST);
	});

	it("shouldn't create tupple", () => {
		expect(function() {
			new CommandTupple(0, 0, "MyOwn");
		}).to.throw("Unknown direction to construct a command tupple");
	});
});
