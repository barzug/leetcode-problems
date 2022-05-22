/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

	function search(leftPos: number, rightPos: number) {
		if (leftPos === rightPos) {
			return leftPos;
		}

		const mid = leftPos + Math.floor((rightPos - leftPos) / 2)

		if (isBadVersion(mid)) {
			return search(leftPos, mid);
		} else {
			return search(mid + 1, rightPos);
		}
	}

	return function(n: number): number {
		return search(1, n)
	};
};


export default solution;
