import findCircleNum from './index';

describe('number-of-provinces', () => {
	it('should work with test case 1', () => {
		expect(
			findCircleNum([
				[1, 1, 0],
				[1, 1, 0],
				[0, 0, 1],
			])
		).toBe(2);
	});

	it('should work with test case 2', () => {
		expect(
			findCircleNum([
				[1, 0, 0],
				[0, 1, 0],
				[0, 0, 1],
			])
		).toBe(3);
	});
});
