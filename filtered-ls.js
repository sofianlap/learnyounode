const fs = require('fs')
const path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]


fs.readdir(folder , function(err,data){
    if(err) return console.error(err)
    data.forEach(function(folder){
        if(path.extname(folder)===ext){
            console.log(folder)
        }
    })
})