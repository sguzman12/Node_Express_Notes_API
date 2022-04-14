import fs from "fs";
import readline from "readline";

export const readTextFile = () => {
  const rl = readline.createInterface({
    input: fs.createReadStream("./repo/notes.txt"),
    output: process.stdout,
  });

  rl.on("line", (line) => {
    console.log(line);
  });
};

export const readJsonFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./repo/notes.json", "utf-8", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};
