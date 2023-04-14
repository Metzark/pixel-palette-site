import { users } from "../../../lib/airtable";

const CreateUser = async (req : any, res : any) =>{
    const {username, password} = req.body;
    try{
        const findUser = await users.select({filterByFormula:`Username="${username}"`}).firstPage();
        if(findUser.length !== 0){
            // user exists
        }
        else{
            // create the user
        }
    }
    catch (err){
        console.error("Error creating user", err);
        res.status(500);
        res.json({ message: "Error creating user", err });
    }
}

export default CreateUser;