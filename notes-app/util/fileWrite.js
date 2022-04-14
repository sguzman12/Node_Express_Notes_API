import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Please enter a note: `, (item) => {
  fs.appendFileSync("../repo/notes.txt", `${item}\n`);
  rl.close();
});
