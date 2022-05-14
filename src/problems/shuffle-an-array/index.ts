class Solution {
	private originalArray: number[] = [];
	private currentArray = [];

	constructor(nums: number[]) {
		this.originalArray = nums.slice();
		this.currentArray = nums.slice();
	}

	reset(): number[] {
		this.currentArray = this.originalArray.slice()

		return this.originalArray;
	}

	shuffle(): number[] {
		for (let i = 1; i < this.currentArray.length; i++) {
			const randomNumber = Math.floor(Math.random() * (i + 1));

			if (i === randomNumber) {
				continue
			}
			const temp = this.currentArray[i]
			this.currentArray[i] = this.currentArray[randomNumber];
			this.currentArray[randomNumber] = temp;
		}

		return this.currentArray
	}
}
