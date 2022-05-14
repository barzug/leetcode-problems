import { ArrayStack, LinkedListStack } from './index';

[ArrayStack, LinkedListStack].forEach((Stack) => {
	describe(`Stack: ${Stack.name}`, () => {
		it('should use push and pop operations correctly', () => {
			const stack = new Stack<number>();

			stack.push(5);
			stack.push(4);
			stack.push(3);
			stack.push(2);
			stack.push(1);
			expect(stack.pop()).toBe(1);
			expect(stack.pop()).toBe(2);
			expect(stack.pop()).toBe(3);

			stack.push(42);
			expect(stack.pop()).toBe(42);

			expect(stack.pop()).toBe(4);
			expect(stack.pop()).toBe(5);
		});

		it('should check empty correctly', () => {
			const stack = new Stack<number>();

			expect(stack.empty()).toBe(true);

			stack.push(42);
			expect(stack.empty()).toBe(false);

			stack.pop();
			expect(stack.empty()).toBe(true);
		});

		it('should work with pop in case of empty list', () => {
			const stack = new Stack<number>();

			expect(stack.pop()).toBeUndefined();

			stack.push(5);
			stack.pop();
			expect(stack.pop()).toBeUndefined();
		});
	});
});
