import fs from "fs";
import readline from "readline";
import { readJsonFile } from "./fileRead.js";

export const insertNoteIntoTxtFile = (item) => {
  fs.appendFileSync("./repo/notes.txt", `${item}\n`);
};

export const consoleInsertTxtFile = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Please enter a note: `, (item) => {
    fs.appendFileSync("../repo/notes.txt", `${item}\n`);
    rl.close();
  });
};

export const insertNoteIntoJsonFile = (item) => {
  if (item != "") {
    const jsonPromise = readJsonFile();

    jsonPromise.then((data) => {
      const parsedData = JSON.parse(data);

      parsedData?.data.push({ message: item });

      fs.writeFile(
        "./repo/notes.json",
        JSON.stringify(parsedData, null, 2),
        "utf-8",
        (err) => {
          if (err) {
            console.log(err);
            // return 409;
          } else {
            // return 201;
          }
        }
      );
    });
  }
};
