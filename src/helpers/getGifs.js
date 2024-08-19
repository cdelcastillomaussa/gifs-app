export const getGifs = async (category) => {
  const APY_KEY = "2pVs7ElNRHJ2Wj9JlLuEL6dJow5FoosT";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium?.url,
  }));
  return gifs;
};
