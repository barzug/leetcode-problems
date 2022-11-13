import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
	});

	it('should work with test case 2', () => {
		expect(problemFunction('')).toEqual([]);
	});

	it('should work with test case 3', () => {
		expect(problemFunction('2')).toEqual(['a', 'b', 'c']);
	});
});
