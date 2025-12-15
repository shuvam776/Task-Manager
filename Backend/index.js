import app from "./app.js";
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config();

const PORT = process.env.PORT;
console.log(PORT)
connectDB()
.then(() => {
    app.listen(PORT, () => {
    console.log(`It is running on ${PORT}`)
});
})
.catch(() => {
    console.log(`it failed to run lol`)
    process.exit(1);
})
