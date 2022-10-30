class MinStack {
	stack = [];
	minStack = [];

	push(val: number): void {
		this.stack.push(val);

		if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= val) {
			this.minStack.push(val);
		}
	}

	pop(): void {
		const poppedElement = this.stack.pop();

		if (poppedElement === this.minStack[this.minStack.length - 1]) {
			this.minStack.pop();
		}

		return poppedElement;
	}

	top(): number {
		if (!this.stack.length) {
			return -1;
		}

		return this.stack[this.stack.length - 1];
	}

	getMin(): number {
		if (!this.minStack.length) {
			return -1;
		}

		return this.minStack[this.minStack.length - 1];
	}
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
