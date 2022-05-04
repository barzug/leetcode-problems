import QuickUnion from '../../dataStructures/QuickUnion';

export default function removeStones(stones: Array<[number, number]>): number {
	const n = stones.length;

	const union = new QuickUnion(n);

	const iIndexes: {[key: number]: number[];} = {};
	const jIndexes: {[key: number]: number[];} = {};

	stones.forEach(([i, j], unionPosition) => {
		if (!iIndexes[i]) {
			iIndexes[i] = [];
		}
		if (!jIndexes[j]) {
			jIndexes[j] = [];
		}

		iIndexes[i].push(unionPosition);
		jIndexes[j].push(unionPosition);

		iIndexes[i].forEach((value) => {
			union.unify(unionPosition, value);
		});
		jIndexes[j].forEach((value) => {
			union.unify(unionPosition, value);
		});
	});

	return n - union.getGroupsNumber();
};
