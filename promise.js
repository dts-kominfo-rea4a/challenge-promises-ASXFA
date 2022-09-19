const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
	return new Promise((resolve, reject) => {
		let hasil = 0;
		if (emosi === null) {
			reject('maaf ada yang salag nich !');
		} else {
			promiseTheaterIXX().then((data1) => {
				data1.forEach((arr) => {
					if (arr.hasil === emosi) {
						hasil += 1;
					}
				});
			});
			promiseTheaterVGC().then((data2) => {
				data2.forEach((arr2) => {
					if (arr2.hasil === emosi) {
						hasil += 1;
					}
				});
				resolve(
					'Emosi ' +
						emosi +
						' : ' +
						hasil
				);
			});
		}
	});
};

// async () => {
// 	const hasil1 = promiseOutput(promiseTheaterIXX[0]);
// 	console.log(hasil1);
// };

module.exports = {
	promiseOutput,
};
