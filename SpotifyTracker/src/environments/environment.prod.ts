const API_URL: string = 'https://spotifytracker-api-git-dev-mvn-14.vercel.app';

export const environment = {
  production: true,
  apiUrl: API_URL,
  clientID: '1a486698eaf54d9397a0362e816849a3',
  redirectUri: `${API_URL}/login/callback`,
};
