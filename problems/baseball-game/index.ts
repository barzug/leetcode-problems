export default function calPoints(ops: string[]): number {
	const stack: Array<number> = [];

	for (let i = 0; i < ops.length; i++) {
		switch (ops[i]) {
			case '+':
				stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
				break;

			case 'D':
				stack.push(stack[stack.length - 1] * 2);

				break;
			case 'C':
				stack.pop();

				break;
			default:
				stack.push(+ops[i]);
		}
	}

	return stack.reduce((accum, value) => {
		return value + accum;
	}, 0);
}
