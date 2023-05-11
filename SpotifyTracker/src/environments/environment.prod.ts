const API_URL: string = 'https://spotifytracker-api.vercel.app';

export const environment = {
  production: true,
  apiUrl: API_URL,
  clientID: '902290fda70b44e38075ac4968459dd7',
  redirectUri: `${API_URL}'/login/callback`,
};
