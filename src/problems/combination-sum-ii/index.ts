export default function combinationSum2(candidates: number[], target: number): number[][] {
	let result: Array<number[][] | null> = new Array(target + 1).fill(0).map(() => []);
	result[0] = [[]];

	const candidatesToNumberObj = {};
	candidates.forEach((candidat) => {
		if (candidat in candidatesToNumberObj) {
			candidatesToNumberObj[candidat]++;
		} else {
			candidatesToNumberObj[candidat] = 1
		}
	})

	Object.keys(candidatesToNumberObj).forEach((key) => {
		const candidat = Number(key);

		for (let i = result.length - candidat; i >= 0; i--) {
			if (!result[i]) {
				continue;
			}

			for (let j = 1; j <= candidatesToNumberObj[key] && i + candidat * j < result.length; j++) {
				const additionalOptions = result[i].map((option) => option.concat(new Array(j).fill(candidat)))
				result[i + candidat * j] = result[i + candidat * j].concat(additionalOptions);
			}
		}
	});

	return result[target];
};
