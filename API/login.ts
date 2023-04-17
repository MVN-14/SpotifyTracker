import axios from 'axios';
import { CLIENT_ID, REDIRECT_URI, AUTH_URL, SCOPE, TOKEN_URL, CLIENT_SECRET, APP_URL } from './config';

export function getAuthorizationUrl(): string {
  return `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURI(REDIRECT_URI)}&show_dialogue=true&scope=${SCOPE}`
}

export async function getClientRedirectUrl(code: string): Promise<string> {
  const response = await axios({
    method: "post",
    url: TOKEN_URL,
    headers: {
      "Authorization": `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    }
  });

  return `${APP_URL}/login/?access_token=${encodeURI(response.data.access_token)}&refresh_token=${encodeURI(response.data.refresh_token)}`
}

export async function getRefreshData(refresh_token: string) {
  const response = await axios({
    method: "post",
    url: TOKEN_URL,
    headers: {
      "Authorization": `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    }
  });

  return {access_token: response.data.access_token, refresh_token: response.data.refresh_token};
}
