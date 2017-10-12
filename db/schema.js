const mongoose = require('mongoose');
// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;


const IdeaSchema = new Schema ({
    title: {
        type: String,
        default: 'New Title',
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const UserSchema = new Schema ({
    userName: {
        type: String,
        required: true
      },

    password:{
        type: String,
        required: true

    },
    

    ideas: [IdeaSchema]
});



const UserModel = mongoose.model('User', UserSchema)
const IdeaModel = mongoose.model('Idea', IdeaSchema)

// Export each model so they can be required elsewhere
module.exports = {
    UserModel: UserModel,
    IdeaModel: IdeaModel
}