const {mongoose} = require ("mongoose");

const userSchema = mongoose.Schema(
    {
        id:{
            type:Number,
            requried: true,
        },
        name:{
            type: String,
            requried: true
        },
        price:{
            type: Number,
            requried: true
        },
        category:{
            type: String,
            requried: true,
        }
    }
)
  module.exports = mongoose.model("Products", userSchema);