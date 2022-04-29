import QuickUnion from './QuickUnion';

describe('QuickUnion', () => {
	it('should calculate group numbers correctly', () => {
		const union = new QuickUnion(10);
		expect(union.getGroupsNumber()).toBe(10);

		union.unify(0, 1);
		union.unify(2, 3);
		union.unify(4, 5);
		union.unify(6, 7);
		union.unify(8, 9);

		expect(union.getGroupsNumber()).toBe(5);

		union.unify(6, 9);
		expect(union.getGroupsNumber()).toBe(4);

		union.unify(7, 5);
		union.unify(0, 2);
		expect(union.getGroupsNumber()).toBe(2);

		union.unify(0, 4);
		expect(union.getGroupsNumber()).toBe(1);
	});

	it('should check connected correctly', () => {
		const union = new QuickUnion(4);
		union.unify(0, 1);
		expect(union.connected(0, 1)).toBe(true);

		union.unify(2, 3);
		expect(union.connected(2, 3)).toBe(true);

		union.unify(1, 2);
		expect(union.connected(0, 3)).toBe(true);
	});
});
