const VALID_OPERATIONS = '+-'

function calculateTwoNumbers(left: number, operation: string, right: number,) {
	if (operation === '+') {
		return left + right
	} else {
		return left - right
	}
}

function _calculate(s: string, first: number): [number, number] {
	let value = 0;
	let operation = '+'

	let i = first;
	while (i < s.length) {
		if (s[i] === ')') {

			i++;
			break;
		}

		if (s[i] === ' ') {
			i++;
			continue;
		}

		if (s[i] === '(') {
			const result = _calculate(s, i + 1);

			i = result[1];

			value = calculateTwoNumbers(value, operation, result[0]);

			continue;
		}

		if (VALID_OPERATIONS.includes(s[i])) {
			operation = s[i]

			i++;
			continue;
		}

		const numberString = s.slice(i);
		value = calculateTwoNumbers(value, operation, parseInt(numberString));

		const position = numberString.search(/[ \(\)\+-]/);
		if (position !== -1) {
			i += position
		} else {
			break;
		}
	}

	return [value, i];
}

export default function calculate(s: string): number {
	return _calculate(s, 0)[0];
};
