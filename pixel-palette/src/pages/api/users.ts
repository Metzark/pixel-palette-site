import { users } from "../../../lib/airtable";

const CreateUser = async (req : any, res : any) =>{
    if(req.method === 'POST'){
        const {username, password} = req.body;
        try{
            const findUser = await users.select({filterByFormula:`Username="${username}"`}).all();
            console.log(findUser);
            if(findUser.length !== 0){
                // user exists
                res.status(400);
                res.json({message: 'Username already exists'});
            }
            else{
                // create the user
                
                const newUser = await users.create([{fields: {Username: username, Password: password}}]);
                res.status(200);
                res.json({message: 'Account created successfully'});
            }
        }
        catch (err){
            console.error("Error creating user", err);
            res.status(500);
            res.json({ message: "Error creating user", err });
        }
    }
}


export default CreateUser;