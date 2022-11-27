import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(10)).toBe(4);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(1)).toBe(0);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(2)).toBe(1);
	});

	it('should work with test case 4', () => {
		expect(problemFunction(857)).toBe(247);
	});
});
