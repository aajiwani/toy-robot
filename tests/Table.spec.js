"use strict";

import Table from "@app/src/Table";

import { expect } from "chai";

describe("Litmus test", () => {
	describe("1 = 1", () => {
		it("should return true", () => {
			expect(1).to.be.eq(1);
		});
	});
});

describe("Table making test", () => {
	describe("Create 5x5 table", () => {
		it("should respond to size as 5x5", () => {
			let table = new Table(5, 5);
			expect(table.Size).to.be.an("object");
			expect(table.Size)
				.to.have.property("x")
				.eq(5);
			expect(table.Size)
				.to.have.property("y")
				.eq(5);
		});
	});
});
