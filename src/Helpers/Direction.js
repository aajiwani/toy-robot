import _ from "lodash";

const Direction = {
	NORTH: "NORTH",
	SOUTH: "SOUTH",
	EAST: "EAST",
	WEST: "WEST",
	Parse: text => {
		switch (_.lowerCase(text)) {
			case "north":
				return this.NORTH;
			case "south":
				return this.SOUTH;
			case "east":
				return this.EAST;
			case "west":
				return this.WEST;
			default:
				return null;
		}
	},
};

export default Object.freeze(Direction);
