function getPower(x: number): number {
	let steps = 0;

	while (x !== 1) {
		if (x % 2 === 0) {
			x = x / 2;
		} else {
			x = 3 * x + 1;
		}

		steps++;
	}

	return steps;
}

export default function getKth(lo: number, hi: number, k: number): number {
	const getPowerMemo: { [key: number]: number } = {};
	const array: number[] = [];
	for (let i = lo; i < hi + 1; i++) {
		getPowerMemo[i] = getPower(i);
		array.push(i);
	}

	let left = 0;
	let right = array.length - 1;

	while (true) {
		if (left === right) {
			return array[left];
		}

		let i = left + 1;
		let j = right;
		let partition = array[left];

		while (true) {
			while (
				getPowerMemo[array[i]] < getPowerMemo[partition] ||
				(getPowerMemo[array[i]] === getPowerMemo[partition] && array[i] < partition)
			) {
				i++;
			}

			while (
				getPowerMemo[array[j]] > getPowerMemo[partition] ||
				(getPowerMemo[array[j]] === getPowerMemo[partition] && array[j] > partition)
			) {
				j--;
			}

			if (j <= i) {
				break;
			}

			[array[i], array[j]] = [array[j], array[i]];
			i++;
			j--;
		}

		[array[j], array[left]] = [array[left], array[j]];

		if (j > k - 1) {
			right = j - 1;
		} else if (j < k - 1) {
			left = j + 1;
		} else {
			return array[j];
		}
	}
}
