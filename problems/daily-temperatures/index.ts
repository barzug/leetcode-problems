export default function dailyTemperatures(temperatures: number[]): number[] {
	if (temperatures.length === 0) {
		return [];
	}

	const warmerDaysArray = new Array<number>(temperatures.length).fill(0);
	let rightMax = -Infinity;

	for (let i = temperatures.length - 1; i >= 0; i--) {
		if (temperatures[i] >= rightMax) {
			rightMax = temperatures[i];

			continue;
		}

		let warmerDayDelay = 1;

		while (temperatures[i + warmerDayDelay] <= temperatures[i]) {
			warmerDayDelay += warmerDaysArray[i + warmerDayDelay];
		}

		warmerDaysArray[i] = warmerDayDelay;
	}

	return warmerDaysArray;
}
