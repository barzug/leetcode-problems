import QuickUnion from '@/dataStructures/QuickUnion';

export default function removeStones(stones: Array<[number, number]>): number {
	const n = stones.length;

	const union = new QuickUnion(n);

	const iIndexes: { [key: number]: number } = {};
	const jIndexes: { [key: number]: number } = {};

	stones.forEach(([i, j], unionPosition) => {
		if (iIndexes[i] !== undefined) {
			union.unify(unionPosition, iIndexes[i]);
		} else {
			iIndexes[i] = unionPosition;
		}

		if (jIndexes[j] !== undefined) {
			union.unify(unionPosition, jIndexes[j]);
		} else {
			jIndexes[j] = unionPosition;

		}
	});

	return n - union.getGroupsNumber();
}
