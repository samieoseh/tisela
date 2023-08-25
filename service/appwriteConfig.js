import { Client, Account } from "appwrite";

const client = new Client();
const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

export default account;
