import quickSort from './index';

describe('quickSort', () => {
	it(`should sort arrays correctly`, () => {
		const arrays = [
			[1, 2, 3, 4],
			[1, 2, 3, 4, 5, 6],
			[4, 3, 2, 1],
			[6, 5, 4, 3, 2, 1],
			[4, 2, 1, 3],
			[1, 3, 5, 4, 2, 6],
			[1],
		];

		arrays.forEach((array) => {
			expect(quickSort(array.slice())).toEqual(array.slice().sort());
		});
	});

	it(`should work with empty array`, () => {
		expect(quickSort([])).toEqual([]);
	});

	it(`should work with comparator`, () => {
		const comparator = (a: string, b: string): number => {
			return b.localeCompare(a);
		};

		const array = ['a', 'ж', 'ё', 'е', 'г', 'в', 'б', 'д'];

		expect(quickSort(array.slice(), comparator)).toEqual([
			'a',
			'б',
			'в',
			'г',
			'д',
			'е',
			'ё',
			'ж',
		]);
	});
});
