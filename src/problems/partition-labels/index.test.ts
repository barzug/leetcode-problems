import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('ababcbacadefegdehijhklij')).toEqual([9, 7, 8]);
	});

	it('should work with test case 2', () => {
		expect(problemFunction('eccbbbbdec')).toEqual([10]);
	});
});
