const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://ambesh123:<Ambesh123>@cluster0.0bjgc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Now connected to mongoDb'))
//     .catch(err => console.error('Something went wrong', err));



    
    const UserSchema = mongoose.Schema(
        {
            name: {
                type: String,
                trim: true,
                required: true
            },
            email: {
                type: String,
                trim: true,
                lowercase: true,
                required: true,
                index: {
                    unique: true
                },
                minlength: [6, "Email can't be shorter than 6 characters"],
                maxlength: [64, "Email can't be longer than 64 characters"]
            },
            password: {
                type: String,
                required: true,
                select: false
            }
        }, {
            timestamps: true
        }
    )
    
  
    
    const UserModel = mongoose.model('User', UserSchema)
    
    module.exports = UserModel
 