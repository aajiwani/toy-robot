import _ from "lodash";

let direction = {
	NORTH: "NORTH",
	SOUTH: "SOUTH",
	EAST: "EAST",
	WEST: "WEST",
	/**
	 * It tries parsing the string containing the direction
	 * Possible inputs:
	 * EAST, WEST, NORTH, SOUTH
	 * east, west, north, south
	 * @param {string} text The string representing one of the four directions
	 * @throws If the text passed is not a direction string
	 */
	Parse: text => {
		let upperedText = text.toUpperCase();
		let availableDirections = _.remove(Object.keys(direction), n => !_.isEqual(n, "Parse"));
		let foundResult = _.find(availableDirections, n => _.isEqual(upperedText, n));
		if (_.isEmpty(foundResult)) throw new Error("Given string is not a direction");
		return foundResult;
	},
};

const Direction = Object.freeze(direction);
export default Direction;
