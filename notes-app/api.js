import express from "express";
import { readTextFile, readJsonFile } from "./util/fileRead.js";
import { convertJSON } from "./util/conversion.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = readJsonFile().then((data) => {
    return data;
  });

  data.then((elements) => {
    if (data != "") {
      console.log(elements);
      res.send(elements);
    } else {
      res.send("No data found");
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
