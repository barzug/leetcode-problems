export default function coinChange(coins: number[], amount: number): number {
	const array = [0];

	for (let i = 1; i <= amount; i++) {
		let min = Infinity;

		for (let j = 0; j < coins.length; j++) {
			if (typeof array[i - coins[j]] !== 'undefined') {
				min = Math.min(min, array[i - coins[j]])
			}
		}

		if (min !== Infinity) {
			array[i] = min + 1;
		}
	}

	return array[amount] ?? -1;
}
