export default function numRescueBoats(people: number[], limit: number): number {
	people.sort((a, b) => b - a); // [3, 2, 4] -> [4, 3, 2]
	let result = 0;

	let i = 0;
	let j = people.length - 1;
	while (i <= j) {
		if (people[i] + people[j] <= limit) {
			i++;
			j--;
		} else {
			i++;
		}

		result++;
	}

	return result;
};
