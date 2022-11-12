import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(
			problemFunction([
				['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
				['John', 'johnsmith@mail.com', 'john00@mail.com'],
				['Mary', 'mary@mail.com'],
				['John', 'johnnybravo@mail.com'],
			])
		).toEqual([
			['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
			['Mary', 'mary@mail.com'],
			['John', 'johnnybravo@mail.com'],
		]);
	});

	it('should work with test case 2', () => {
		expect(
			problemFunction([
				['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
				['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
				['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
				['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
				['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co'],
			])
		).toEqual([
			['Gabe', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe3@m.co'],
			['Kevin', 'Kevin0@m.co', 'Kevin3@m.co', 'Kevin5@m.co'],
			['Ethan', 'Ethan0@m.co', 'Ethan4@m.co', 'Ethan5@m.co'],
			['Hanzo', 'Hanzo0@m.co', 'Hanzo1@m.co', 'Hanzo3@m.co'],
			['Fern', 'Fern0@m.co', 'Fern1@m.co', 'Fern5@m.co'],
		]);
	});

	it('should work with test case 3', () => {
		expect(
			problemFunction([
				['David', 'David0@m.co', 'David1@m.co'],
				['David', 'David3@m.co', 'David4@m.co'],
				['David', 'David4@m.co', 'David5@m.co'],
				['David', 'David2@m.co', 'David3@m.co'],
				['David', 'David1@m.co', 'David2@m.co'],
			])
		).toEqual([
			['David', 'David0@m.co', 'David1@m.co', 'David2@m.co', 'David3@m.co', 'David4@m.co', 'David5@m.co'],
		]);
	});
});
