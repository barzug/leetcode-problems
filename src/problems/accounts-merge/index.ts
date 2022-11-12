export default function accountsMerge(accounts: string[][]): string[][] {
	const emailsMap = {};
	const visitedArray = new Array(accounts.length).fill(false);

	accounts.forEach((accountData, accountIndex) => {
		const emails = accountData.slice(1);

		emails.forEach((email) => {
			if (!(email in emailsMap)) {
				emailsMap[email] = [];
			}

			emailsMap[email].push(accountIndex);
		});
	});

	const result: string[][] = [];

	function dfs(index, currentEmails: Set<string>) {
		if (visitedArray[index]) {
			return;
		}

		visitedArray[index] = true;

		const accountData = accounts[index];
		const emails = accountData.slice(1);

		emails.forEach((email) => {
			currentEmails.add(email);

			emailsMap[email].forEach((index) => {
				dfs(index, currentEmails);
			});
		});
	}

	accounts.forEach((accountData, accountIndex) => {
		if (visitedArray[accountIndex]) {
			return;
		}

		const userName = accountData[0];

		const currentEmails = new Set<string>();
		dfs(accountIndex, currentEmails);
		result.push([userName, ...Array.from(currentEmails).sort()]);
	});

	return result;
}
