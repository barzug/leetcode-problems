type Comparator<T> = (a: T, b: T) => boolean;

const _defaultComparator: Comparator<any> = function (a, b) {
	return b - a >= 0;
};

function merge<T>(
	left: Array<T>,
	right: Array<T>,
	comparator: Comparator<T>
): Array<T> {
	const array = [];

	let i = 0;
	let j = 0;
	while (i < left.length && j < right.length) {
		if (comparator(left[i], right[j])) {
			array.push(left[i++]);
		} else {
			array.push(right[j++]);
		}
	}

	return array.concat(left.slice(i), right.slice(j));
}

function _mergeSort<T>(array: Array<T>, comparator: Comparator<T>) {
	if (array.length <= 1) {
		return array;
	}

	const mid = Math.floor(array.length / 2);

	const arrayLeft = _mergeSort(array.slice(0, mid), comparator);
	const arrayRight = _mergeSort(array.slice(mid), comparator);

	return merge(arrayLeft, arrayRight, comparator);
}

export default function mergeSort<T = number>(
	array: Array<T>,
	comparator: Comparator<T> = _defaultComparator
) {
	return _mergeSort(array, comparator);
}
