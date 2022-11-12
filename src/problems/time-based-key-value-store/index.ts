class TimeMap {
	map = {};

	set(key: string, value: string, timestamp: number): void {
		if (!this.map[key]) {
			this.map[key] = [];
		}

		this.map[key].push([timestamp, value]);
	}

	get(key: string, timestamp: number): string {
		const array = this.map[key];

		if (!array || !array.length) {
			return '';
		}

		if (array[0][0] > timestamp) {
			return '';
		}

		let first = 0;
		let last = this.map[key].length - 1;
		while (first < last) {
			let middle = Math.ceil((first + last) / 2);

			if (array[middle][0] <= timestamp) {
				first = middle;
			} else {
				last = middle - 1;
			}
		}

		return this.map[key][first][1];
	}
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
