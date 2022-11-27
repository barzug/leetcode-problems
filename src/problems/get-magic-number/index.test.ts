import path from 'path';

import problemFunction from './index';

describe(path.basename(__dirname), () => {
	it('should work with test case 1', () => {
		expect(problemFunction(1)).toBe(3); // 1, 0, 8
	});

	it('should work with test case 2', () => {
		expect(problemFunction(2)).toBe(4); // 11, 69, 88, 96
	});

	it('should work with test case 3', () => {
		expect(problemFunction(3)).toBe(12); //  101, 111, 181, 609, 619, 689, 808, 818, 888, 906, 916, 986
	});

	it('should work with test case 4', () => {
		expect(problemFunction(4)).toBe(20); // 1001, 1111, 1691, 1881, 1961, 6009, 6119, 6699, 6889, 6969, 8008, 8118, 8698, 8888, 8968, 9006, 9116, 9696, 9886, 9966
	});

	it('should work with test case 5', () => {
		expect(problemFunction(5)).toBe(60); // 10001, 10101, 10801, 11011, 11111, 11811, 16091, 16191, 16891, 18081, 18181, 18881, 19061, 19161, 19861, 60009, 60109, 60809, 61019, 61119, 61819, 66099, 66199, 66899, 68089, 68189, 68889, 69069, 69169, 69869, 80008, 80108, 80808, 81018, 81118, 81818, 86098, 86198, 86898, 88088, 88188, 88888, 89068, 89168, 89868, 90006, 90106, 90806, 91016, 91116, 91816, 96096, 96196, 96896, 98086, 98186, 98886, 99066, 99166, 99866
	});
});
