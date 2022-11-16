class List {
	key: number;
	value: any;
	prev: List | null;
	next: List | null;

	constructor(key: number, value: any, prev: List = null, next: List = null) {
		this.key = key;
		this.value = value;
		this.prev = prev;
		this.next = next;
	}
}

class LRUCache {
	cache: Map<number, List>;
	listFirstElement: List | null = null;
	listLastElement: List | null = null;
	capacity: number;

	constructor(capacity: number) {
		this.cache = new Map();
		this.capacity = capacity;
	}

	// must be O(1) average
	get(key: number): number {
		if (!this.cache.has(key)) {
			return -1;
		}

		const node = this.cache.get(key);

		if (node !== this.listLastElement) {
			this._removeNode(node);

			node.next = null;
			node.prev = this.listLastElement;
			this.listLastElement.next = node;
			this.listLastElement = node;
		}

		return node.value;
	}

	// must be O(1) average
	put(key: number, value: number): void {
		if (this.cache.has(key)) {
			this._removeNode(this.cache.get(key));
			this.cache.delete(key);
		}

		if (this.cache.size === this.capacity) {
			const removedKey = this.listFirstElement.key;
			this.cache.delete(removedKey);

			this.listFirstElement = this.listFirstElement?.next;
			this.listFirstElement && (this.listFirstElement.prev = null);
		}

		const listNode = new List(key, value, this.listLastElement);
		this.cache.set(key, listNode);

		if (!this.listFirstElement) {
			this.listFirstElement = listNode;
			this.listLastElement = listNode;
		} else {
			this.listLastElement.next = listNode;
			this.listLastElement = listNode;
		}
	}

	_removeNode(node: List): void {
		if (node === this.listFirstElement) {
			if (node === this.listLastElement) {
				this.listFirstElement = null;
				this.listLastElement = null;

				return;
			}


			this.listFirstElement = this.listFirstElement.next;
			this.listFirstElement.prev = null;

			return
		}

		if (node === this.listLastElement) {
			this.listLastElement = this.listLastElement.prev;
			this.listLastElement.next = null;

			return
		}

		node.prev.next = node.next;
		node.next.prev = node.prev;
	}
}
