class NumArray {
	prefixSumArray: number[];

	constructor(nums: number[]) {
		this.prefixSumArray = new Array(nums.length + 1);
		this.prefixSumArray[0] = 0;

		nums.forEach((value, index) => {
			this.prefixSumArray[index + 1] = this.prefixSumArray[index] + value;
		})
	}

	sumRange(left: number, right: number): number {
		return this.prefixSumArray[right + 1] - this.prefixSumArray[left];
	}
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
