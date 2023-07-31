var fs = require("fs");

fs.readFile('data.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

// It placed it on the next line when the data.txt file was appended 