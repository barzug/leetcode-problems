const VALID_OPERATIONS = '+-';

function calculateTwoNumbers(left: number, operation: string, right: number) {
	if (operation === '+') {
		return left + right;
	} else {
		return left - right;
	}
}

function _calculate(s: string, first: number): [number, number] {
	let value = 0;
	let operation = '+';

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
			operation = s[i];

			i++;
			continue;
		}

		const numberString = s.slice(i);
		value = calculateTwoNumbers(value, operation, parseInt(numberString));

		const position = numberString.search(/[ \(\)\+-]/);
		if (position !== -1) {
			i += position;
		} else {
			break;
		}
	}

	return [value, i];
}

// faster, but not so beautiful
function calculateRecursion(s: string): number {
	return _calculate(s, 0)[0];
}

export default function calculate(s: string): number {
	let sign = 1;
	let result = 0;
	const stack: Array<number> = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') {
			continue;
		}

		if (s[i] === '+') sign = 1;
		else if (s[i] === '-') sign = -1;
		else if (s[i] === '(') {
			stack.push(result);
			stack.push(sign);
			result = 0;
			sign = 1;
		} else if (s[i] === ')') {
			result = result * stack.pop() + stack.pop();
		} else {
			const numberString = s.slice(i);
			const number = parseInt(numberString);
			result += sign * number;

			const position = numberString.search(/[ \(\)\+-]/);
			if (position !== -1) {
				i += position - 1;
			} else {
				break;
			}
		}
	}

	return result;
}
