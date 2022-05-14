const VALID_OPERATIONS = '+-*\/'

export default function evalRPN(tokens: string[]): number {
	const stack: Array<number> = [];
	for (let i = 0; i < tokens.length; i++) {
		if (!VALID_OPERATIONS.includes(tokens[i])) {
			stack.push(+tokens[i])
			continue
		}

		const left = stack.pop();
		const right = stack.pop();

		switch (tokens[i]) {
			case '+':
				stack.push(right + left)
				break;

			case '-':
				stack.push(right - left)
				break;

			case '*':
				stack.push(right * left)
				break;

			case '/':
				stack.push(Math.trunc(right / left))
				break;
		}
	}

	return stack[0];
};
