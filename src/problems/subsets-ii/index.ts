export default function subsetsWithDup(nums: number[]): number[][] {
	const result = [[]];

	const uniqValuesMap = {};

	nums.forEach((value) => {
		if (value in uniqValuesMap) {
			uniqValuesMap[value]++;
		} else {
			uniqValuesMap[value] = 1;
		}
	}, {});

	Object.keys(uniqValuesMap).forEach((num) => {
		for (let i = result.length - 1; i >= 0; i--) {
			for (let j = 1; j <= uniqValuesMap[num]; j++) {
				result.push([...result[i], ...new Array(j).fill(num)]);
			}
		}
	});

	return result;
}
