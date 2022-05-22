import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		// @ts-ignore
		const mockCallback = jest.fn(x => x === 4);

		const testedFunction = problemFunction(mockCallback);

		expect(testedFunction(5)).toBe(4);

		expect(mockCallback.mock.calls.length).toBe(2)
	});

	it('should work with test case 2', () => {
		// @ts-ignore
		const mockCallback = jest.fn(x => x === 1);

		const testedFunction = problemFunction(mockCallback);

		expect(testedFunction(1)).toBe(1);

		expect(mockCallback.mock.calls.length).toBe(0)
	});
});
