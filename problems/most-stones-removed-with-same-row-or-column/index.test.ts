import findCircleNum from './index';

describe('regions-cut-by-slashes', () => {
	it('should work with test case 1', () => {
		expect(findCircleNum([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]])).toBe(5);
	});

	it('should work with test case 2', () => {
		expect(findCircleNum([[0,0],[0,2],[1,1],[2,0],[2,2]])).toBe(3);
	});

	it('should work with test case 3', () => {
		expect(findCircleNum([[0,0]])).toBe(0);
	});
});
