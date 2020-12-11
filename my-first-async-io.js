const fs = require('fs')

var x = process.argv[2]

fs.readFile(x , function (error,data){
    if(error) return console.error(error)
    var file =data.toString().split('\n').length-1
    console.log(file)
})
