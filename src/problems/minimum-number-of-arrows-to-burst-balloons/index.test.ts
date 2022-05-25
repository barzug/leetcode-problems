import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction([
				[10, 16],
				[2, 8],
				[1, 6],
				[7, 12],
			])
		).toBe(2);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction([
				[1, 2],
				[3, 4],
				[5, 6],
				[7, 8],
			])
		).toBe(4);
	});

	it('should work with test case 3', () => {
		expect(
			problemFunction([
				[1, 2],
				[2, 3],
				[3, 4],
				[4, 5],
			])
		).toBe(2);
	});
});
