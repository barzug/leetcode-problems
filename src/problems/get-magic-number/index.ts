const VALID_SYMBOLS = ['0', '1', '6', '8', '9'];
const VALID_MIDDLE_SYMBOLS = ['0', '1', '8'];

export default function getMagicNumber(numberOfChars: number): number {
	const numbersToCheck = Math.floor(numberOfChars / 2);
	const hasMiddleSymbol = numberOfChars % 2 !== 0;

	const rangeStart = Math.floor(Math.pow(10, numbersToCheck - 1));
	const rangeEnd = Math.pow(10, numbersToCheck);

	let result = 0
	for (let i = rangeStart; i < rangeEnd; i++) {
		if (String(i).split('').every((char) => VALID_SYMBOLS.includes(char))) {
			result++
		}
	}

	return hasMiddleSymbol ? result * VALID_MIDDLE_SYMBOLS.length : result;
}
