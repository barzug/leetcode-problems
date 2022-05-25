import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(['2', '1', '+', '3', '*'])).toBe(9);
	});

	it('should work with test case 2', () => {
		expect(problemFunction(['4', '13', '5', '/', '+'])).toBe(6);
	});

	it('should work with test case 3', () => {
		expect(problemFunction(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22);
	});
});
