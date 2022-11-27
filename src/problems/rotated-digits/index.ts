const VALID_REVERSE_SYMBOLS = {
	'0': '0',
	'1': '1',
	'8': '8',
	'2': '5',
	'5': '2',
	'6': '9',
	'9': '6',
};

const isRotated = (value: number): boolean => {
	const resultArray = [];
	const sourceNumberArray = String(value).split('');

	for (let i = 0; i < sourceNumberArray.length; i++) {
		if (!(sourceNumberArray[i] in VALID_REVERSE_SYMBOLS)) {
			return false;
		}

		resultArray.push(VALID_REVERSE_SYMBOLS[sourceNumberArray[i]]);
	}
	return Number(resultArray.join('')) !== value;
};


export default function rotatedDigits(n: number): number {
	let result = 0;

	for (let i = 2; i <= n; i++) {
		if (isRotated(i)) {
			result++;
		}
	}

	return result;
}
