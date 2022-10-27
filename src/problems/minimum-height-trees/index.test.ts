import path from 'path';
import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction(4, [
				[1, 0],
				[1, 2],
				[1, 3],
			])
		).toEqual([1]);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction(6, [
				[3, 0],
				[3, 1],
				[3, 2],
				[3, 4],
				[5, 4],
			])
		).toEqual([3, 4]);
	});

	it('should work with test case 3', () => {
		expect(
			problemFunction(3, [
				[0, 1],
				[0, 2],
			])
		).toEqual([0]);
	});
});
