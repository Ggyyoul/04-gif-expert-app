export const getGifs = async ( category) => {
  const url =
    `http://api.giphy.com/v1/gifs/search?api_key=oBzdrIoXRePjP71ync4RXn0SxeThaJKc&q=${ encodeURI( category ) }&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((data) => {
    return {
      id: data.id,
      url: data.images.original.url,
      title: data.title,
    };
  });

  return gifs
};