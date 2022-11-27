import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('all valid single numbers check', () => {
		expect(problemFunction(1)).toBe(true);
		expect(problemFunction(8)).toBe(true);
		expect(problemFunction(0)).toBe(true);
	});

	it('all invalid single numbers check', () => {
		expect(problemFunction(2)).toBe(false);
		expect(problemFunction(3)).toBe(false);
		expect(problemFunction(4)).toBe(false);
		expect(problemFunction(5)).toBe(false);
		expect(problemFunction(7)).toBe(false);
		expect(problemFunction(6)).toBe(false);
		expect(problemFunction(9)).toBe(false);
	});

	it('check zero', () => {
		expect(problemFunction(0)).toBe(true);
		expect(problemFunction(100)).toBe(false);
	});

	it('should work with test case 1', () => {
		expect(problemFunction(101)).toBe(true);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(69)).toBe(true);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(169)).toBe(false);
	});

	it('should work with test case 4', () => {
		expect(problemFunction(181)).toBe(true);
	});

	it('should work with test case 5', () => {
		expect(problemFunction(108)).toBe(false);
	});
});
