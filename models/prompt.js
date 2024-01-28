import {Schema, model, models} from 'mongoose'

const PromptSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    prompt: {
        type: String,
        require: [true, 'Prompt is required'],
    },

})

// All the 'model' created in mongoose will be stored in 'models' library
// In express whenever a new model "Prompt" is created this schema will be called every time
// That is not an optimised approach as the model is already created the first time
// To prevent this we first check the 'models' library. If it already exits, that saves us time and memory, if it doesn't exist then it will create the model

const Prompt = models.Prompt || model("Prompt", PromptSchema)

export default Prompt;