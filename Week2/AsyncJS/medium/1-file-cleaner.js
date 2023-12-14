/*
 File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
*/

const fs = require("fs");
let dataFetched = " ";
fs.readFile("file.txt", "utf-8", function (err, data) {
  dataFetched = data;
  console.log(dataFetched);

  let cleanedData = dataFetched.replace(/\s+/g, " ");
  fs.writeFile("file.txt", cleanedData, function (err) {
    if (err) throw err;
    console.log("The file has been saved");
  });
});
