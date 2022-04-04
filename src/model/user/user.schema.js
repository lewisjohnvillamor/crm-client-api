const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    
        name: {
            type:String,
            maxlength:50,
            required:true,
            index: true
        },
        company: {
            type:String,
            maxlength:50,
            required:true
        } ,
        address: {
            type:String,
            maxlength:50

        },
        phone: {
            type:String,
            maxlength:50

        },
        email: {
            type:String,
            maxlength:50,
            required:true
        },
        password: {
            type:String,
            minlength:8,
            maxlength:200,
            required:true
        }
    
})

module.exports = {
   
    UserSchema: mongoose.model('Users',UserSchema)
}