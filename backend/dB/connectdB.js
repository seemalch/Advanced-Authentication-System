import mongoose from "mongoose";

export const connectdB = async () =>{

try{
 console.log("mongo_uri:", process.env.MONGO_URL)
 const conn = await mongoose.connect(process.env.MONGO_URL)
 console.log(`MongoDB COnnected: ${conn.connection.host}`)
}

catch (error){
 console.log("Error connecting", error.message)
 process.exit(1);
}

}