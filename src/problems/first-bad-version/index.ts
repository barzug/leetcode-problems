/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
	function search(leftPos: number, rightPos: number) {
		while (leftPos < rightPos) {
			const mid = leftPos + Math.floor((rightPos - leftPos) / 2);

			if (isBadVersion(mid)) {
				rightPos = mid;
			} else {
				leftPos = mid + 1;
			}
		}

		return leftPos;
	}

	return function (n: number): number {
		return search(1, n);
	};
};

export default solution;
