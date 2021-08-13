
export const getList = async ({ queryKey }: any) => {
  const [type] = queryKey;
  const response = await fetch(`https://api.jikan.moe/v3/user/Marloulou/animelist/${type}`);
  const data = await response.json();
  return data.anime;
}