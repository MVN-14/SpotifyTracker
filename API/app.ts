import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import axios from 'axios';
import { APP_URL, CLIENT_ID, CLIENT_SECRET, PORT, REDIRECT_URI, TOKEN_URL } from './config';
import { getAuthorizationUrl, getClientRedirectUrl } from './login';

const app: Express = express();

app.use(cors());

app.get('/login/url', (_, res: Response): void => {
  console.log("/login/url");
  res.send({data: getAuthorizationUrl()}); 
});

app.get('/login/callback', async (req: Request, res: Response): Promise<void> => {
  console.log("/login/callback");
  const code: string = req.query.code as string;

  if(!code) {
    res.status(500).send("Server error retrieving code from query param");
  }
  try {
    res.redirect(await getClientRedirectUrl(code));    
  } catch (error: any) {
    res.status(500).send(error.message)
  }
});

app.get("/test", (_, res: Response): void => {
  console.log("test");
  res.send("Test");
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});