import fs from "fs";

const ITERATIONS = 1000

console.time("writeFileSync");

for(let i = 0; i < ITERATIONS; i++) {
    const bigContent = 'x'.repeat(10000)
    const fileName = `/tmp/tests/${i.toString()}`
    fs.writeFileSync(fileName, bigContent);
}

console.timeEnd('writeFileSync')