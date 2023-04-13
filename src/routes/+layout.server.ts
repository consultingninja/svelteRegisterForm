import { returnURLsList, bulkAddUsers, deleteAll } from "../backendUtils.js";
import { dbConn } from "../dbConn.js";
import { generateUsers } from "../GenerateData.js";


export async function load({}){
    let dbError = {
        hasError: false,
        error: ''
    }
    let URLList:string[] = [];

    try{
        const collection = await dbConn();
        URLList = await returnURLsList(collection);
        //console.log("User list", URLList);

        return{dbError,URLList}
    }
    catch(error:any){
       dbError.hasError = true;
       dbError.error = error.message?? 'Error Connecting to DB or retrieving URL List';
    }
    finally{
        return{dbError,URLList}
    }




    // if(users.length < 1){
    //     const generatedUsers = generateUsers();
    //     await bulkAddUsers(collection,generatedUsers)
    //     users = await returnAllUsers(collection)
    // }


    //collection.drop()

    //await deleteAll(collection)

    //console.log("Users Check",users);

    // const serializedUsers = users.map((user) => {
    //     const {_id, ...userWithoutId} = user;
    //     return userWithoutId
    // })
    //if(!users.length) await addUser(collection)

    //const result = await deleteAll(collection)

    //console.log(users)





}