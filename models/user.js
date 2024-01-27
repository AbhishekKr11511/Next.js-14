import {Schema, model, models} from 'mongoose'

const UserSchema = new Schema({
    email : {
        type: String,
        unique: [true, "Email already exists!"],
        required : [true, "Email is required!"],
    },
    username: {
        type : String,
        required : [true, "Username is required!"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
})

// All the 'model' created in mongoose will be stored in 'models' library
// In express whenever a new model "User" is created this schema will be called every time
// That is not an optimised approach as the model is already created the first time
// To prevent this we first check the 'models' library. If it already exits, that saves us time and memory, if it doesn't exist then it will create the model

const User = models.User || model("User", UserSchema)

export default User;