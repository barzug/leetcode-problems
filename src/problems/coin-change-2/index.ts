export default function change(amount: number, coins: number[]): number {
	const array = new Array(amount + 1).fill(0);
	array[0] = 1;

	for (let j = 0; j < coins.length; j++) {
		for (let i = coins[j]; i < array.length; i++) {
			if (i - coins[j] >= 0) {
				array[i] += array[i - coins[j]]
			}
		}
	}

	return array[amount];
};
