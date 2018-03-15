"use strict";

import Table from "@app/src/Table";
import {expect} from "chai";

describe("Table creation tests", () => {
  describe("Create 5x5 table", () => {
    it("Should respond to size as 5x5", () => {
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
    it("Should respond to size as 6x10", () => {
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

  describe("Given that table doesn't have a proper area", () => {
    it("Should not construct a table", () => {
      expect(() => {
        new Table(0, 0);
      }).to.throw("A table needs a physical area to be called a table");

      expect(() => {
        new Table(-1, 10);
      }).to.throw("A table needs a physical area to be called a table");

      expect(() => {
        new Table(10, -1);
      }).to.throw("A table needs a physical area to be called a table");

      expect(() => {
        new Table(10, 0);
      }).to.throw("A table needs a physical area to be called a table");
    });
  });

  describe("Given a table's width and height", () => {
    it("The boudary should be width - 1 and height - 1", () => {
      let table = new Table(5, 5);
      expect(table.Boundary).to.be.an("object");

      expect(table.Boundary)
        .to.have.property("x1")
        .eq(0);
      expect(table.Boundary)
        .to.have.property("y1")
        .eq(0);
      expect(table.Boundary)
        .to.have.property("x2")
        .eq(4);
      expect(table.Boundary)
        .to.have.property("y2")
        .eq(4);
    });
  });
});
