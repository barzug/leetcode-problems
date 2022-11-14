export default function leastInterval(tasks: string[], n: number): number {
	const tasksNumber: { [key: string]: number } = {};

	let maxSameTasks = 0;
	tasks.forEach((task) => {
		if (!(task in tasksNumber)) {
			tasksNumber[task] = 0;
		}

		tasksNumber[task]++;

		maxSameTasks = Math.max(maxSameTasks, tasksNumber[task]);
	});

	// AAA, 2 -> A * * A * * A. Last element would be added in the next forloop
	// we do it for case AAABBB, 2 -> A B * A B * (AB)
	let numberOfElements = (maxSameTasks - 1) * (n + 1);
	Object.keys(tasksNumber).forEach((symbol) => {
		if (tasksNumber[symbol] === maxSameTasks) {
			numberOfElements++ // add last elements
		}
	})

	return Math.max(numberOfElements, tasks.length);
}
