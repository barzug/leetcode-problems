// type Comparator<T> = (a: T, b: T) => number;
//
// const _defaultComparator: Comparator<any> = function (a, b) {
// 	return a - b;
// };
//
// class Heap<T = any> {
// 	private heap: (T | null)[];
// 	comparator = _defaultComparator;
//
// 	constructor(comparator?: Comparator<T>) {
// 		this.heap = [null];
// 		this.comparator = comparator;
// 	}
//
// 	public pop(): T | null {
// 		if (this.heap.length === 1) {
// 			return null;
// 		}
//
// 		let smallest = this.heap[1];
//
// 		this.heap[1] = this.heap[this.heap.length - 1];
// 		this.heap.splice(this.heap.length - 1);
//
// 		const length = this.heap.length;
//
// 		let currentIndex = 1;
// 		let leftChildIndex = currentIndex * 2;
// 		let rightChildIndex = currentIndex * 2 + 1;
//
// 		while (
// 			(leftChildIndex < length && (this.comparator(this.heap[currentIndex], this.heap[leftChildIndex]) < 0)) ||
// 			(rightChildIndex < length && (this.comparator(this.heap[currentIndex], this.heap[rightChildIndex]) < 0))
// 		) {
// 			if (this.comparator(this.heap[currentIndex], this.heap[leftChildIndex]) < 0) {
// 				[this.heap[currentIndex], this.heap[leftChildIndex]] = [
// 					this.heap[leftChildIndex],
// 					this.heap[currentIndex],
// 				];
// 				currentIndex = leftChildIndex;
// 			}
//
// 			if (this.comparator(this.heap[currentIndex], this.heap[rightChildIndex]) < 0) {
// 				[this.heap[currentIndex], this.heap[rightChildIndex]] = [
// 					this.heap[rightChildIndex],
// 					this.heap[currentIndex],
// 				];
// 				currentIndex = rightChildIndex;
// 			}
//
// 			leftChildIndex = currentIndex * 2;
// 			rightChildIndex = currentIndex * 2 + 1;
// 		}
//
// 		return smallest;
// 	}
//
// 	public push(element: T): void {
// 		this.heap.push(element);
//
// 		if (this.heap.length > 1) {
// 			let currentIndex = this.heap.length - 1;
// 			let parentIndex = Math.floor(currentIndex / 2);
//
// 			while (currentIndex > 1 && this.comparator(this.heap[currentIndex], this.heap[parentIndex]) > 0) {
// 				[this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
// 				currentIndex = parentIndex;
// 				parentIndex = Math.floor(currentIndex / 2);
// 			}
// 		}
// 	}
//
// 	public topElement(): T {
// 		return this.heap[1];
// 	}
//
// 	public size(): number {
// 		return this.heap.length - 1;
// 	}
//
// 	public values(): T[] {
// 		return this.heap;
// 	}
// }
//
// export default function topKFrequent(words: string[], k: number): string[] {
// 	const frequencyMap = {};
// 	words.forEach((value) => {
// 		frequencyMap[value] = (frequencyMap[value] || 0) + 1;
// 	});
//
// 	const comparator = (a, b) =>
// 		frequencyMap[b] !== frequencyMap[a] ? frequencyMap[b] - frequencyMap[a] : a.localeCompare(b);
//
// 	const minHeap = new Heap(comparator);
// 	Object.keys(frequencyMap).forEach((word) => {
// 		if (minHeap.size() > k && comparator(word, minHeap.topElement()) > 0) {
// 			return;
// 		}
//
// 		minHeap.push(word);
//
// 		if (minHeap.size() > k) {
// 			minHeap.pop();
// 		}
// 	});
//
// 	const result = [];
// 	while (minHeap.size() > 0) {
// 		result.push(minHeap.pop());
// 	}
//
// 	return result.reverse().sort(comparator);
// }


export default function topKFrequent(words: string[], k: number): string[] {
	const frequencyMap = {};
	words.forEach((value) => {
		frequencyMap[value] = (frequencyMap[value] || 0) + 1;
	});

	return Object.keys(frequencyMap)
		.sort((a, b) => (frequencyMap[b] !== frequencyMap[a] ? frequencyMap[b] - frequencyMap[a] : a.localeCompare(b)))
		.slice(0, k);
}
