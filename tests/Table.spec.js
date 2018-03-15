"use strict";

import Table from "@app/src/Table";
import { expect } from "chai";

describe("Table creation tests", () => {
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

	describe("Create 6x10 table", () => {
		it("should respond to size as 6x10", () => {
			let table = new Table(6, 10);
			expect(table.Size).to.be.an("object");
			expect(table.Size)
				.to.have.property("x")
				.eq(6);
			expect(table.Size)
				.to.have.property("y")
				.eq(10);
		});
	});
});
