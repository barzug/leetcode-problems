import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction([
				['1', '0', '1', '0', '0'],
				['1', '0', '1', '1', '1'],
				['1', '1', '1', '1', '1'],
				['1', '0', '0', '1', '0'],
			])
		).toBe(4);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction([
				['0', '1'],
				['1', '0'],
			])
		).toBe(1);
	});

	it('should work with test case 3', () => {
		expect(problemFunction([['0']])).toBe(0);
	});

	it('should work with test case 4', () => {
		expect(problemFunction([['1', '1']])).toBe(1);
	});

	it('should work with test case 5', () => {
		expect(
			problemFunction([
				['1', '1'],
				['1', '1'],
			])
		).toBe(4);
	});
});
