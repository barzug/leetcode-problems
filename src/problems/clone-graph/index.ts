import {TreeNode} from '@/algorithms/createBinaryTreeFromArray';


class Node {
	val: number;
	neighbors: Node[];

	constructor(val?: number, neighbors?: Node[]) {
		this.val = (val === undefined ? 0 : val);
		this.neighbors = (neighbors === undefined ? [] : neighbors);
	}
}

export default function cloneGraph(node: Node | null): Node | null {
	const visitedNodes: Node[] = [];

	function _cloneGraph(node: Node | null): Node | null {
		if (!node) {
			return null;
		}

		if (visitedNodes[node.val]) {
			return visitedNodes[node.val];
		}

		visitedNodes[node.val] = new Node(node.val, []);

		for (let i = 0; i < node.neighbors.length; i++) {
			visitedNodes[node.val].neighbors.push(_cloneGraph(node.neighbors[i]));
		}

		return visitedNodes[node.val];
	}

	return _cloneGraph(node);
};
