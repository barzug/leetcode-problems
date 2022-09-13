export default function trap(height: number[]): number {
	if (height.length <= 2) {
		return 0;
	}

	let result = 0;

	let leftPointer = 0;
	let rightPointer = height.length - 1;

	let leftMax = height[leftPointer];
	let rightMax = height[rightPointer];

	while (leftPointer < rightPointer) {
		if (leftMax <= rightMax) {
			leftPointer++;

			if (leftMax < height[leftPointer]) {
				leftMax = height[leftPointer];
			} else {
				result += leftMax - height[leftPointer]
			}
		} else {
			rightPointer--;

			if (rightMax < height[rightPointer]) {
				rightMax = height[rightPointer];
			} else {
				result += rightMax - height[rightPointer]
			}
		}
	}

	return result;
}
