import fs from "fs";

const ITERATIONS = 10000

console.time("writeFileSync");

for(let i = 0; i < ITERATIONS; i++) {
    const fileName = `/tmp/tests/${i.toString()}`
    fs.writeFileSync(fileName, '');
}

console.timeEnd('writeFileSync')