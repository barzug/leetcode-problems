const WORD_END = Symbol();

class Trie {
	trie = {};

	insert(word: string): void {
		let currentTrieNode = this.trie;

		for (let i = 0; i < word.length; i++) {
			if (!currentTrieNode[word[i]]) {
				currentTrieNode[word[i]] = {};
			}

			currentTrieNode = currentTrieNode[word[i]];
		}

		currentTrieNode[WORD_END] = true;
	}

	searchLastSymbol(prefix: string): {} | null {
		let currentTrieNode = this.trie;

		for (let i = 0; i < prefix.length; i++) {
			if (!currentTrieNode[prefix[i]]) {
				return null;
			}

			currentTrieNode = currentTrieNode[prefix[i]];
		}

		return currentTrieNode;
	}

	search(word: string): boolean {
		const currentTrieNode = this.searchLastSymbol(word);

		return !!currentTrieNode && !!currentTrieNode[WORD_END];
	}

	startsWith(prefix: string): boolean {
		const currentTrieNode = this.searchLastSymbol(prefix);

		return !!currentTrieNode;
	}
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
