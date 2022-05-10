export default function dailyTemperatures(temperatures: number[]): number[] {
	if (temperatures.length === 0) {
		return [];
	}

	const temperaturesDay: Array<number> = [];

	const warmerDaysArray: Array<number> = [];

	for (let i = temperatures.length - 1; i >= 0; i--) {
		const warmerDays = temperaturesDay
			.slice(temperatures[i] + 1)
			.filter((value) => !!value);

		if (warmerDays.length === 0) {
			warmerDaysArray[i] = 0;
		} else {
			warmerDaysArray[i] = Math.min(...warmerDays) - i;
		}

		temperaturesDay[temperatures[i]] = i;
	}

	return warmerDaysArray;
}
