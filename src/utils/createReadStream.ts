import * as csvdata from "csv-parser";

// Importing csv-parser into fsdata
const fsdata = require("fs");

async function createReadStream() {
  // Reading csv data row wise from geek_data csv file
  fsdata
    .createReadStream("apps.csv")
    .pipe(csvdata())
    .on("data", (row: any) => {
      // Display data row by row
      console.log(row);
    })
    .on("end", () => {
      console.log("success");
    });
}

module.exports = { createReadStream };
