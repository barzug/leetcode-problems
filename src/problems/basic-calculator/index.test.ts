import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('1 + 1')).toBe(2);
	});

	it('should work with test case 2', () => {
		expect(problemFunction('2-1+2')).toBe(3);
	});

	it('should work with test case 3', () => {
		expect(problemFunction('(1+(4+5+2)-3)+(6+8)')).toBe(23);
	});

	it('should work with test case 4', () => {
		expect(problemFunction('123+325')).toBe(123 + 325);
	});
});
