import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction("12")).toBe(2);
	});

	it('should work with test case 2', () => {
		expect(problemFunction("226")).toBe(3);
	});

	it('should work with test case 3', () => {
		expect(problemFunction("06")).toBe(0);
	});

	it('should work with test case 4', () => {
		expect(problemFunction("0")).toBe(0);
	});

	it('should work with test case 4', () => {
		expect(problemFunction("27")).toBe(1);
	});
});
