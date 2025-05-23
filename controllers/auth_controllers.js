import { Client, Account, ID, Functions } from "appwrite";

const client = new Client()
  .setEndpoint(
    "https://8080-aklavya20-integrationfo-nyegpb4hh8i.ws-us118.gitpod.io/v1"
  )
  .setProject("68236a41003b6bb7ed6f");

const account = new Account(client);

export const updateVerification = async (userId, secret) => {
  try {
    const response = await account.updateVerification(userId, secret);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateNewPassword = async (
  userId,
  secret,
  password,
  password_confirm
) => {
  try {
    const response = await account.updateRecovery(
      userId,
      secret,
      password,
      password_confirm
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
