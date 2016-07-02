var ElasticsearchCSV = require('elasticsearch-csv');

// create an instance of the importer with options
var esCSV = new ElasticsearchCSV({
    es: { index: 'gob', type: 'presupuesto', host: 'localhost:9200'},
    csv: { filePath: '/Users/mdagostino/workspace/utn/tasd/data/presupuesto-2016.csv', headers: true }
});

esCSV.import()
    .then(function (response) {
        // Elasticsearch response for the bulk insert
        console.log(response);
    }, function (err) {
        // throw error
        console.log("Error: "  + err);
        throw err;
    });
