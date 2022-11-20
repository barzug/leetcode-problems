export default function minWindow(s: string, t: string): string {
	if (t.length === 0 || s.length === 0) {
		return ""
	}

	const neededSymbols = {};

	for (let i = 0; i < t.length; i++) {
		if (t[i] in neededSymbols) {
			neededSymbols[t[i]]++
		} else {
			neededSymbols[t[i]] = 1;
		}
	}

	let remainSymbols = Object.keys(neededSymbols).length;
	let left = 0;
	let right = 0;
	let minimum = Infinity;
	let minimumSubstr = "";

	while (true) {
		while (remainSymbols > 0 && right < s.length) {
			if (s[right] in neededSymbols) {
				neededSymbols[s[right]]--;

				if (neededSymbols[s[right]] === 0) {
					remainSymbols--
				}
			}

			right++
		}

		if (remainSymbols > 0) {
			break;
		}

		while (remainSymbols <= 0) {
			if (s[left] in neededSymbols) {
				neededSymbols[s[left]]++;

				if (neededSymbols[s[left]] === 1) {
					remainSymbols++;
				}
			}

			left++
		}

		if (right - left < minimum && remainSymbols <= 1) {
			minimum = right - left;
			minimumSubstr = s.slice(left - 1, right);
		}
	}

	return minimumSubstr
};
