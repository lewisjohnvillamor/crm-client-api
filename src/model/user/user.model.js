const {UserSchema} = require("./user.schema")

const insertUser = (userObj) => {

    return new Promise((resolve, reject) => {
      UserSchema(userObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };

const getUserByEmail = email => {
    return new Promise((resolve,reject)=>{
        if(!email) return false

        try {
            
        UserSchema.findOne({email}, (error,data) =>{
            if(error) {
                console.log(error)
                resolve(error)
            }
            resolve(data)
         });
        } catch (error) {
             resolve(error)
        }
    });
}


module.exports = {
    insertUser,
    getUserByEmail,

};