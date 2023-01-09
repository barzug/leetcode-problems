export default function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
	const numbersToPathesArrays = [
		{
			0: 1,
		},
		{},
		{},
		{},
		{},
	];

	[nums1, nums2, nums3, nums4].forEach((array, index) => {
		const currentObject = numbersToPathesArrays[index];

		const currentKeys = Object.keys(currentObject);

		const nextObject = numbersToPathesArrays[index + 1];

		currentKeys.forEach((key) => {
			array.forEach((value) => {
				const realValue = Number(key) + value;

				nextObject[realValue] = (nextObject[realValue] || 0) + currentObject[key];
			});
		});
	});

	return numbersToPathesArrays[4][0] || 0;
}
