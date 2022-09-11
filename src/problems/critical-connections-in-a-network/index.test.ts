import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction(4, [
				[0, 1],
				[1, 2],
				[2, 0],
				[1, 3],
			])
		).toEqual([[1, 3]]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(2, [[0, 1]])).toEqual([[0, 1]]);
	});

	it('should work with test case 3', () => {
		expect(
			problemFunction(6, [
				[0, 1],
				[1, 2],
				[2, 0],
				[1, 3],
				[3, 4],
				[4, 5],
				[5, 3],
			])
		).toEqual([[1, 3]]);
	});

	it('should work with test case 4', () => {
		expect(
			problemFunction(10, [
				[1, 0],
				[2, 0],
				[3, 0],
				[4, 1],
				[5, 3],
				[6, 1],
				[7, 2],
				[8, 1],
				[9, 6],
				[9, 3],
				[3, 2],
				[4, 2],
				[7, 4],
				[6, 2],
				[8, 3],
				[4, 0],
				[8, 6],
				[6, 5],
				[6, 3],
				[7, 5],
				[8, 0],
				[8, 5],
				[5, 4],
				[2, 1],
				[9, 5],
				[9, 7],
				[9, 4],
				[4, 3],
			])
		).toEqual([]);
	});
});
