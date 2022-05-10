export default class ArrayQueue<T = string> {
	private array: Array<T> = [];
	private first = 0;

	public enqueue(element: T): void {
		this.array.push(element);
	}

	public dequeue(): T | void {
		if (this.empty()) {
			return;
		}

		const element = this.array[this.first];
		this.first++;

		return element;
	}

	public empty(): boolean {
		return this.array.length === this.first;
	}
}
