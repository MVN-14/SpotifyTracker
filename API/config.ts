import dotenv from 'dotenv';

dotenv.config();

export const PORT: string = process.env.PORT ?? "";
export const CLIENT_ID: string = process.env.CLIENTID ?? "";
export const CLIENT_SECRET: string = process.env.CLIENTSECRET ?? "";
export const REDIRECT_URI: string = process.env.REDIRECTURI ?? "";
export const AUTH_URL: string = process.env.AUTHURL ?? "";
export const TOKEN_URL: string = process.env.TOKENURL ?? "";
export const SCOPE: string = process.env.SCOPE ?? "";
export const APP_URL: string = process.env.APPURL ?? "";
