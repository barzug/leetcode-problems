export default class ArrayStack<T = string> {
	private array: Array<T> = [];

	public push(element: T): void {
		this.array.push(element);
	}

	public pop(): T | void {
		return this.array.pop();
	}

	public empty(): boolean {
		return this.array.length === 0;
	}
}
