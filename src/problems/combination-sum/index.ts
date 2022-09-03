export default function combinationSum(candidates: number[], target: number): number[][] {
	let result: Array<number[][] | null> = new Array(target + 1).fill(0).map(() => []);
	result[0] = [[]];

	candidates.forEach((candidat) => {
		for (let i = candidat; i < result.length; i++) {
			if (!result[i - candidat]) {
				continue;
			}

			const additionalOptions = result[i - candidat].map((option) => [...option, candidat])
			result[i] = result[i].concat(additionalOptions);
		}
	});

	return result[target];
};
