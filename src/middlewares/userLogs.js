const fs = require('fs');
const path = require('path')
module.exports = (req,res,next) => {
    console.log('holis');

    fs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt'),`EL usuario ingreso a la ruta : ${req.url} \n`)

    next()
}