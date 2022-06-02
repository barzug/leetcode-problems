export default function networkDelayTime(times: number[][], n: number, k: number): number {
	const nodesDelay: Array<number> = new Array(n + 1).fill(Infinity);
	nodesDelay[0] = 0; // не используем
	nodesDelay[k] = 0;

	let hasChanges = true;
	while (hasChanges) {
		hasChanges = false;

		times.forEach(([from, to, delay]) => {
			if (nodesDelay[from] + delay < nodesDelay[to]) {
				nodesDelay[to] = nodesDelay[from] + delay;
				hasChanges = true;
			}
		});
	}

	const maxTime = Math.max(...nodesDelay);

	return maxTime !== Infinity ? maxTime : -1;
}
