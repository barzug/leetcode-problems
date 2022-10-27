export default function maxProfit(prices: number[]): number {
	let summ = 0;

	for (let i = 0; i < prices.length - 1; i++) {
		if (prices[i + 1] > prices[i]) {
			summ += prices[i + 1] - prices[i];
		}
	}

	return summ;
}
