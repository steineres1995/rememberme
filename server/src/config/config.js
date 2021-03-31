require('dotenv').config();

exports.default = {
    port:parseInt(process.env.PORT),
    db_url: 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
    
};
