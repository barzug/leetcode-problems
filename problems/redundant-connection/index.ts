import QuickUnion from '../../dataStructures/QuickUnion/QuickUnion';

export default function findRedundantConnection(edges: Array<[number, number]>): [number, number] {
	const n = edges.length;

	const union = new QuickUnion(n)

	return edges.find((value) => {
		if (union.connected(...value)) {
			return true
		}

		union.unify(...value);

		return false
	})
};
