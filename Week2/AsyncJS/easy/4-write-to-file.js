/*Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks*/

const fs = require("fs");

let data = "Added a line";

fs.writeFile("a.txt", data, { flag: "a" }, (err, data) => {
  if (err) {
    console.error(err);
  }
});
