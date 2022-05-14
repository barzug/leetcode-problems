import QuickUnion from '@/dataStructures/QuickUnion';

export default function regionsBySlashes(grid: string[]): number {
	const n = grid.length;

	const quickUnion = new QuickUnion(2 * n * n + 2 * n);

	for (let j = 0; j < n; j++) {
		for (let i = 0; i < n; i++) {
			const top = j * (2 * n + 1) + i;
			const bottom = (j + 1) * (2 * n + 1) + i;
			const left = 2 * j * n + n + j + i;
			const right = 2 * j * n + n + j + i + 1;

			if (grid[j][i] === '/') {
				quickUnion.unify(top, left);
				quickUnion.unify(bottom, right);
			} else if (grid[j][i] === '\\') {
				quickUnion.unify(top, right);
				quickUnion.unify(bottom, left);
			} else {
				quickUnion.unify(top, left);
				quickUnion.unify(bottom, right);
				quickUnion.unify(top, bottom);
			}
		}
	}

	return quickUnion.getGroupsNumber();
}
