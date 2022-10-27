const MINUTE = 60;

export default function numPairsDivisibleBy60(time: number[]): number {
	const numbers = new Array(MINUTE).fill(0);
	let result = 0;

	time.forEach((value) => {
		const reminder = value % MINUTE;
		result += numbers[(MINUTE - reminder) % MINUTE];

		numbers[reminder]++;
	});

	return result;
}
