import { model, Schema} from "mongoose";

const userSchema = Schema({
    email : {
        unique : true,
        type : String,
        required : true,
        lowercase : true,
        default : ""

    },
    password : {
        type : String,
        unique : true,
        required : true,
        default : ""
    }

})


export default model("db",userSchema)