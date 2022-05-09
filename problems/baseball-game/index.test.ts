import calPoints from './index';

describe('baseball-game', () => {
	it('should work with test case 1', () => {
		expect(calPoints(["5","2","C","D","+"])).toBe(30);
	});

	it('should work with test case 2', () => {
		expect(calPoints(["5","-2","4","C","D","9","+","+"])).toBe(27);
	});

	it('should work with test case 3', () => {
		expect(calPoints(["1","C"])).toBe(0);
	});
});
