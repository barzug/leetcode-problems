class Node<T> {
	public item: T;
	public next?: Node<T>;

	constructor(item: T) {
		this.item = item;
	}
}

export default class LinkedListStack<T = string> {
	private first?: Node<T>;

	public push(element: T): void {
		const prevFirst = this.first;

		this.first = new Node(element);

		this.first.next = prevFirst
	}

	public pop(): T | void {
		const element = this.first?.item;

		this.first = this.first?.next;

		return element;
	}


	public empty(): boolean {
		return !this.first;
	}
}
