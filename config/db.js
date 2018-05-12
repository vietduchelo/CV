var mongoose = require('mongoose');
module.exports = {
    dbConnect: dbConnect
}
function dbConnect() {
    mongoose.connect('mongodb://contact:123@ds061395.mlab.com:61395/contactwithkhoa');
}