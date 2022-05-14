import QuickUnion from '@/dataStructures/QuickUnion';

export default function findCircleNum(isConnected: number[][]): number {
	const union = new QuickUnion(isConnected.length);

	for (let i = 0; i < isConnected.length; i++) {
		for (let j = i; j < isConnected[i].length; j++) {
			if (isConnected[i][j] === 1) {
				union.unify(i, j);
			}
		}
	}

	return union.getGroupsNumber();
}
