export const authGuard = () => {
  const access_token: string | null = sessionStorage.getItem("access_token");
  return access_token !== null;
}