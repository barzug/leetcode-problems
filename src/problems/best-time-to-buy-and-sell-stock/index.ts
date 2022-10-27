export default function maxProfit(prices: number[]): number {
	if (prices.length === 0) {
		return 0;
	}

	let profit = 0;
	let min = prices[0];

	for (let i = 1; i < prices.length; i++) {
		min = Math.min(min, prices[i]);
		profit = Math.max(prices[i] - min, profit);
	}

	return profit;
}
