type Comparator<T> = (a: T, b: T) => number;

const _defaultComparator: Comparator<any> = function(a, b) {
	return b - a;
};

function _quickSort<T = number>(array: Array<T>, first: number, last: number, comparator: Comparator<T>) {
	if (last - first < 1) {
		return;
	}

	// choose median of 3?
	const pivot = Math.floor((last - first) / 2 + first);
	[array[first], array[pivot]] = [array[pivot], array[first]];

	const comparable = array[first];
	let left = first
	let right = last
	let i = first;

	while (i <= right) {
		if (comparator(comparable, array[i]) < 0) {
			[array[left], array[i]] = [array[i], array[left]]
			left++
			i++
		} else if (comparator(comparable, array[i]) > 0) {
			[array[right], array[i]] = [array[i], array[right]]
			right--
		} else {
			i++
		}
	}

	_quickSort(array, first, left - 1, comparator);
	_quickSort(array, right + 1, last, comparator);
}

export default function quickSort<T = number>(
	array: Array<T>,
	comparator: Comparator<T> = _defaultComparator,
): Array<T> {
	// shuffleArray ?

	_quickSort(array, 0, array.length - 1, comparator)

	return array;
}
