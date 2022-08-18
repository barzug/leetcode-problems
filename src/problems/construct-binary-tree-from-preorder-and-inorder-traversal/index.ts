import {TreeNode} from '@/algorithms/createBinaryTreeFromArray';

// export default function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
// 	if (!inorder.length) {
// 		return null;
// 	}
//
// 	if (inorder.length === 1) {
// 		return new TreeNode(inorder[0]);
// 	}
//
// 	const head = preorder[0];
// 	const inorderHeadIndex = inorder.indexOf(head);
// 	const leftInorderSubtree = inorder.slice(0, inorderHeadIndex);
// 	const rightInorderSubtree = inorder.slice(inorderHeadIndex + 1);
//
// 	const leftPreorderSubtree = preorder.slice(1, 1 + inorderHeadIndex);
// 	const rightPreorderSubtree = preorder.slice(1 + inorderHeadIndex);
//
// 	return new TreeNode(head,  buildTree(leftPreorderSubtree, leftInorderSubtree), buildTree(rightPreorderSubtree, rightInorderSubtree));
// };


// preorder: [1, 2, 4, 5, 3, 6]
// inorder: [4, 2, 5, 1, 6, 3]


//       1
//      / \
//     2   3
//   / \   /
//  4   5  6

export default function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	let p = 0;
	let i = 0;
	function build(stop?: number) {
		if (inorder[i] === stop) {
			return null
		}

		const root = new TreeNode(preorder[p++])

		root.left = build(root.val)
		i++
		root.right = build(stop)

		return root
	}

	return build()
};
