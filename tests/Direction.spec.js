"use strict";

import Direction from "@app/src/Helpers/Direction";
import { expect } from "chai";

describe("Parsing of Direction", () => {
	it("should parse EAST, WEST, NORTH, SOUTH correctly case-insensetively", () => {
		expect(Direction.Parse("east")).to.be.eq(Direction.EAST);
		expect(Direction.Parse("EAST")).to.be.eq(Direction.EAST);
		expect(Direction.Parse("west")).to.be.eq(Direction.WEST);
		expect(Direction.Parse("WeSt")).to.be.eq(Direction.WEST);
		expect(Direction.Parse("south")).to.be.eq(Direction.SOUTH);
		expect(Direction.Parse("sOuTh")).to.be.eq(Direction.SOUTH);
		expect(Direction.Parse("noRTH")).to.be.eq(Direction.NORTH);
		expect(Direction.Parse("North")).to.be.eq(Direction.NORTH);
	});
});
