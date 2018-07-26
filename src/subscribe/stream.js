const fs = require('fs')
const stream = fs.createReadStream('./data/1.txt')
const readLine = require('readline')

let length = 0

stream.on('data',function (chunk) {
    length += chunk.toString().length
})

stream.on('end',function () {
    console.log(length)
})

const ra = readLine.createInterface({
    input:stream
})

let lineNum = 0

ra.on('line',function (line) {
    lineNum++
})

ra.on('close',function () {
    console.log(lineNum)
})

