export default function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
	const costs: number[][] = new Array(k + 2).fill(null).map(() => new Array(n).fill(Infinity));

	costs[0][src] = 0;

	for (let i = 1; i < k + 2; i++) {
		costs[i][src] = 0;

		flights.forEach(([from, to, price]) => {
			costs[i][to] = Math.min(costs[i - 1][from] + price, costs[i][to]);
		});
	}

	return costs[k + 1][dst] === Infinity ? -1 : costs[k + 1][dst];
}
