function isPossible(weights: number[], days: number, amount: number): boolean {
	let currentDay = 1;
	let currentAmount = 0;
	for (let i = 0; i < weights.length; i++) {
		if (currentAmount + weights[i] <= amount) {
			currentAmount += weights[i];
		} else {
			currentDay++;
			currentAmount = weights[i];
		}
	}

	return currentDay <= days;
}

export default function shipWithinDays(weights: number[], days: number): number {
	let sumOfWeights = 0;
	let maxValue = 0;
	weights.forEach((value) => {
		sumOfWeights += value;
		maxValue = Math.max(value, maxValue);
	});

	let min = maxValue;
	let max = sumOfWeights;
	while (min < max) {
		const mid = Math.floor((max + min) / 2);

		if (isPossible(weights, days, mid)) {
			max = mid;
		} else {
			min = mid + 1;
		}
	}

	return min;
}
