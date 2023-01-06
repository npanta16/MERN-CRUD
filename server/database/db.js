

import mongoose from 'mongoose'
mongoose.set("strictQuery", false);



const Connection = async(username, password)=>{
    const URL =`mongodb+srv://${username}:${password}@mern-app.uxjspwh.mongodb.net/?retryWrites=true&w=majority`
   
    try{

       await  mongoose.connect(URL)
       console.log('database connected')
    }catch(error){
        console.log('Error while connecting with database', error)
    }

}

export default Connection;