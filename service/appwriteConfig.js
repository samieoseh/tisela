import { Client, Account, Databases } from "appwrite";

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

export { account, databases };
