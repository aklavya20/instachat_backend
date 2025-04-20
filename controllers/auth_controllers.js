import {Client,Account,ID,Functions} from "appwrite"

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') 
.setProject('67f26b71002a16a7623d')              

const account = new Account(client);

export const updateVerification = async (userId, secret) => {
    try{
       const response=await account.updateVerification(userId, secret);
         console.log(response); 
            return response;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export const updateNewPassword = async (userId, secret, password,password_confirm) => {
    try {
        const response = await account.updateRecovery(userId, secret, password,password_confirm);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};