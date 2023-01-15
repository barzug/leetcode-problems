export default function backspaceCompare(s: string, t: string): boolean {
	let sPointer = s.length - 1;
	let tPointer = t.length - 1;

	while (sPointer >= 0 || tPointer >= 0) {
		let sNumberOfBackspaces = 0;
		while (sNumberOfBackspaces > 0 || s[sPointer] === '#') {
			if (s[sPointer] === '#') {
				sNumberOfBackspaces++
			} else {
				sNumberOfBackspaces--;
			}
			sPointer--;
		}

		let tNumberOfBackspaces = 0;
		while (tNumberOfBackspaces > 0 || t[tPointer] === '#') {
			if (t[tPointer] === '#') {
				tNumberOfBackspaces++
			} else {
				tNumberOfBackspaces--;
			}
			tPointer--;
		}

		if (s[sPointer--] !== t[tPointer--]) {
			return false
		}
	}

	return true
};
