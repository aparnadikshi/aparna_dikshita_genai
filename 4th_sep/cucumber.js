//for cucumber to understand when the files will run

module.exports = {
default: {
require: [
'features/stepDefinations/*.ts',
'hooks/*.ts'
],

requireModule: [
'ts-node/register'
],



format: [
'progress',
'json:reports/cucumber-report.json',
'html:reports/cucumber-report.html'
],
//this is the format for the report to be generated in the reports folder
//when we run this command, it will generate a report in the reports folder with the name cucumber-report.json

//parallel: 3
}
};
