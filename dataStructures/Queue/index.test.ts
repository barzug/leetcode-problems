import Queue from './';

describe('Queue', () => {
	it('should use enqueue and dequeue operations correctly', () => {
		const queue = new Queue<number>();

		queue.enqueue(5);
		queue.enqueue(4);
		queue.enqueue(3);
		queue.enqueue(2);
		queue.enqueue(1);
		expect(queue.dequeue()).toBe(5);
		expect(queue.dequeue()).toBe(4);
		expect(queue.dequeue()).toBe(3);

		queue.enqueue(42);

		expect(queue.dequeue()).toBe(2);
		expect(queue.dequeue()).toBe(1);

		expect(queue.dequeue()).toBe(42);
	});

	it('should check empty correctly', () => {
		const queue = new Queue<number>();

		expect(queue.empty()).toBe(true);

		queue.enqueue(42);
		expect(queue.empty()).toBe(false);

		queue.dequeue();
		expect(queue.empty()).toBe(true);
	});

	it('should work with dequeue in case of empty list', () => {
		const queue = new Queue<number>();

		expect(queue.dequeue()).toBeUndefined();

		queue.enqueue(5);
		queue.dequeue();
		expect(queue.dequeue()).toBeUndefined();
	});
});
