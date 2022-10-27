class MyQueue {
	inputStack: number[] = [];
	outputStack: number[] = [];

	_fillOutputStack() {
		while (this.inputStack.length !== 0) {
			this.outputStack.push(this.inputStack.pop());
		}
	}

	push(x: number): void {
		this.inputStack.push(x);
	}

	pop(): number {
		if (this.outputStack.length) {
			return this.outputStack.pop();
		}

		this._fillOutputStack();

		return this.outputStack.pop();
	}

	peek(): number {
		if (this.outputStack.length) {
			return this.outputStack[this.outputStack.length - 1];
		}

		this._fillOutputStack();

		return this.outputStack[this.outputStack.length - 1];
	}

	empty(): boolean {
		return this.outputStack.length === 0 && this.inputStack.length === 0;
	}
}
