function extractData() {
    const fs = require('fs');
    fs.readFile('data.txt', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const dataArray = data.toString().split("\r\n");
        console.log(dataArray);

        var dictionaryArray = []
        for (var i = 0; i < dataArray.length; i++) {
            var parts = dataArray[i].split(";");
            dictionaryArray.push({ question: parts[0], answer: parts[1] });
        }
        console.log(dictionaryArray);
    });
}

extractData()