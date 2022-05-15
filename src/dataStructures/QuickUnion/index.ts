export default class QuickUnion {
	private array: number[] = [];
	private groupSizes: number[] = [];

	private groupsNumber: number = 0;

	// 0(n)
	constructor(size: number) {
		this.groupsNumber = size;

		for (let i = 0; i < size; i++) {
			this.array[i] = i;
			this.groupSizes[i] = 1;
		}
	}

	// takes log(n) or amortized constant time alpha(n) in case with compression
	public findRoot(element: number): number {
		let root = element;

		while (this.array[root] !== root) {
			root = this.array[root];
		}

		// compression
		while (element !== root) {
			const temp = this.array[element];
			this.array[element] = root;
			element = temp;
		}

		return root;
	}

	// takes log(n) or amortized constant time alpha(n) in case with compression
	public unify(element1: number, element2: number): void {
		const root1 = this.findRoot(element1);
		const root2 = this.findRoot(element2);

		if (root1 === root2) {
			return;
		}

		if (this.groupSizes[root1] > this.groupSizes[root2]) {
			this.array[root1] = root2;
			this.groupSizes[root1] += this.groupSizes[root2];
		} else {
			this.array[root2] = root1;
			this.groupSizes[root2] += this.groupSizes[root1];
		}

		this.groupsNumber--;
	}

	public connected(element1, element2): boolean {
		return this.findRoot(element1) === this.findRoot(element2);
	}

	public getArray(): number[] {
		return this.array;
	}

	public getGroupsNumber(): number {
		return this.groupsNumber;
	}
}
