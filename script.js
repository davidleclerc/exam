const loadJsonFile = require('load-json-file');
 
loadJsonFile('data.json').then(file => {
    for (var i = 0;i<file.items.length;i++){
    console.log(file.items[i].fname + " " + file.items[i].age);    
}});