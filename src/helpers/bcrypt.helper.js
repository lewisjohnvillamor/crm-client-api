const bcrypt = require('bcrypt');
const { promise } = require('bcrypt/promises');
const saltRounds = 10;

const hasPassword = (plainPassword) => {
    return new Promise((resolve) => {
        resolve(bcrypt.hashSync(plainPassword,saltRounds));
    });
};

const comparePassword = (painPassowrd,passwordfromDb) => {

    console.log ("test",painPassowrd,passwordfromDb);

    return new Promise((resolve,reject) => {
        bcrypt.compare(painPassowrd, passwordfromDb, function(err, result) {
            // result == true
            
            if(err) {reject (err);}
            resolve(result);
            console.log ("test",painPassowrd,passwordfromDb,"resolve",result);

        });
    })
}

module.exports ={
    hasPassword,
    comparePassword
}