const VALID_REVERSE_SYMBOLS = {
	0: '0',
	1: '1',
	6: '9',
	8: '8',
	9: '6'
}

export default function isMagicNumber(n: number): boolean {
	const nString = String(n);

	for (let i = 0; i < Math.ceil(nString.length / 2); i++) {
		if (!(nString[i] in VALID_REVERSE_SYMBOLS)) {
			return false;
		}

		if (VALID_REVERSE_SYMBOLS[nString[i]] !== nString[nString.length - 1 - i]) {
			return false;
		}
	}

	return true
}

