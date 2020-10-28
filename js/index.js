import { sum } from './utils.js';

export const exampleFn = (arg) => {
	const name = 'ES';
	console.log(`${arg} ${name} ${sum(2, 2)}`);
};

exampleFn('Terser works or is it?');
