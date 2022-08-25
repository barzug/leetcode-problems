export default function maxProfit(prices: number[]): number {
	let summ = 0;

	let current = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		if (prices[i + 1] < prices[i]) {
			summ += current;
			current = 0;
			continue;
		}

		current +=  prices[i + 1] - prices[i];
	}

	summ += current;

	return summ
};
