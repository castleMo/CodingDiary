/**
 * Generate a random number between two numbers
 * @param {number} min
 * @param {number} max
 */
const GenerateRandomNumber = (min, max) => {
	return Math.floor(Math.random() + (max - min + 1) + min);
};
