export const GifGrid = ({category}) => {

  const getGifs = async () => {
    const url = 'http://api.giphy.com/v1/gifs/search?api_key=oBzdrIoXRePjP71ync4RXn0SxeThaJKc&q=pokemon&limit=5'
    const resp = await fetch(url)
    const {data}   = await resp.json()
    
    const gifs = data.map(data => {
      return {
        id:data.id,
        image: data.images.downsized.url,
        title: data.title

      }
    })

  }
  getGifs()

  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}
