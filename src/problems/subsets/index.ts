export default function subsets(nums: number[]): number[][] {
	const result = [[]];

	nums.forEach((num) => {
		for (let i = result.length - 1; i >= 0; i--) {
			result.push([...result[i], num]);
		}
	});

	return result;
}
