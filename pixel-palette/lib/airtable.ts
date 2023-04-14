import Airtable from "airtable";

const base = new Airtable({apiKey: process.env.API_KEY}).base( `${process.env.LOGIN_BASE_KEY}`);

const users = base('Users')

export {users};