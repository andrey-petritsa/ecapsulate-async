import * as fs from 'fs';

const ITERATIONS = 1000000

console.time("existsSync");

for(let i = 0; i < ITERATIONS; i++) {
    fs.existsSync('benchmark/file')
}

console.timeEnd('existsSync')


