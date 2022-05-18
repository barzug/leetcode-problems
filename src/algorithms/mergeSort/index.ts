type Comparator<T> = (a: T, b: T) => number;

const _defaultComparator: Comparator<any> = function (a, b) {
	return a - b;
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
		if (comparator(right[j], left[i]) > 0) {
			array.push(left[i++]);
		} else {
			array.push(right[j++]);
		}
	}

	return array.concat(left.slice(i), right.slice(j));
}


export default function mergeSort<T = number>(
	array: Array<T>,
	comparator: Comparator<T> = _defaultComparator
) {
	if (array.length <= 1) {
		return array;
	}

	const mid = Math.floor(array.length / 2);

	const arrayLeft = mergeSort(array.slice(0, mid), comparator);
	const arrayRight = mergeSort(array.slice(mid), comparator);

	return merge(arrayLeft, arrayRight, comparator);
}
