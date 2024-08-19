export const getGifs = async (category) => {
  const APY_KEY = "0rO3KmGaPvR2F860nfMJu9W5qzNo4gTT";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&q=${category}&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium?.url,
  }));
  console.log(gifs);
  return gifs;
};
