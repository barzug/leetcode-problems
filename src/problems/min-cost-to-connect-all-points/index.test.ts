import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction([
				[0, 0],
				[2, 2],
				[3, 10],
				[5, 2],
				[7, 0],
			])
		).toBe(20);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction([
				[3, 12],
				[-2, 5],
				[-4, 1],
			])
		).toBe(18);
	});
});
