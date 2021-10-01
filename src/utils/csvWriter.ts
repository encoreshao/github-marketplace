import * as csvwriter from 'csv-writer';
const readStream = require('./createReadStream');
const createCsvWriter = csvwriter.createObjectCsvWriter

// Passing the column names intp the module
const csvWriter = createCsvWriter({

  // Output csv file name is geek_data
  path: 'apps.csv',
  header: [
    // Title of the columns (column_names)
    {id: 'logo', title: 'Logo'},
    {id: 'name', title: 'Name'},
    {id: 'permalink', title: 'Permalink'},
    {id: 'url', title: 'URL'},
    {id: 'powered_by', title: 'PoweredBy'},
    {id: 'short_description', title: 'ShortDesc'},
    {id: 'installs', title: 'Installs'}
  ]
});

async function toCSV(results: any){
  // Writerecords function to add records
  csvWriter
    .writeRecords(results)
    .then(()=> console.log('// Data uploaded into csv successfully'));

  readStream.createReadStream();
}

module.exports = { toCSV };