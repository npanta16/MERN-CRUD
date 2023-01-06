import User from '../schema/user-schema.js';



export const addUser =async(request, response)=>{
    const inputUser = request.body ;


    const newUser = new User(inputUser)

    try{
        await newUser.save();
        response.status(201).json(newUser)

    }catch(error){
        response.status(409).json({message: error.message})
    }

}

