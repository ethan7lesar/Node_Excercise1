

var fs = require('fs');

fs.appendFile('data.txt', 'I did it wrong but its fine!', function (err, data) { 
                        if (err)
        console.log(err);
                        else
        console.log('Append operation complete.');
       
});

// it will add to last statement statement.


