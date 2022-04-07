let printdate = function () {
    let today = new Date()

    console.log(today.getDate())
}
let printmonth = function () {
    let today = new Date()

    console.log(today.getMonth() + 1)
}
let getBatchinfo = function () {
    console.log('uranium week3 day 1 today topic was node.js thank you')
}
module.exports.date = printdate
module.exports.month = printmonth
module.exports.batchinfo = getBatchinfo
