type Comparator<T> = (a: T, b: T) => number;

const _defaultComparator: Comparator<any> = function (a, b) {
	return a - b;
};

function _quickSort<T = number>(array: Array<T>, first: number, last: number, comparator: Comparator<T>) {
	if (last - first < 1) {
		return;
	}

	// choose median of 3?
	const pivot = Math.floor((last - first) / 2 + first);
	[array[first], array[pivot]] = [array[pivot], array[first]];

	let i = first + 1;
	let j = last;

	while (true) {
		while (comparator(array[i], array[first]) < 0) {
			i++;
		}

		while (comparator(array[j], array[first]) > 0) {
			j--;
		}

		if (i >= j) {
			break;
		}

		[array[i], array[j]] = [array[j], array[i]];
		i++;
		j--;
	}

	[array[first], array[j]] = [array[j], array[first]];

	_quickSort(array, first, j - 1, comparator);
	_quickSort(array, j + 1, last, comparator);
}

export default function quickSort<T = number>(
	array: Array<T>,
	comparator: Comparator<T> = _defaultComparator
): Array<T> {
	// shuffleArray ?

	_quickSort(array, 0, array.length - 1, comparator);

	return array;
}
