import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction( "hit", "cog", ["hot","dot","dog","lot","log","cog"])).toBe(5);
	});

	it('should work with test case 2', () => {
		expect(problemFunction("hit", "cog", ["hot","dot","dog","lot","log"])).toBe(0);
	});
});
