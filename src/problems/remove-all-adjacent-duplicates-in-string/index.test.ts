import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction('abbaca')).toBe('ca');
	});

	it('should work with test case 2', () => {
		expect(problemFunction('azxxzy')).toBe('ay');
	});
});
