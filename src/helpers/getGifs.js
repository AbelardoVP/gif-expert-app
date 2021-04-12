export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=K2fpa2ZWnttLG07czhvh2jVZvZkA2WED&q=${encodeURI(category)}&limit=10`
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    })
    console.log("GIFS==", gifs)
    return gifs
}