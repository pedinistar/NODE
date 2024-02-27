const { log } = require("console");
const fs = require("fs");

fs.writeFile("message.txt", "hellow i am nina uze.", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("./message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
